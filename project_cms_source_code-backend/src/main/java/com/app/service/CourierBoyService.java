package com.app.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CourierBoyRepository;
import com.app.dao.CourierRepository;
import com.app.dao.RequestRepository;
import com.app.dao.UserRepository;
import com.app.dto.CourierBoySignupRequest;
import com.app.dto.StatusOFCourierRequest;
import com.app.dto.UserSigninRequest;
import com.app.dto.UserSignupRequest;
import com.app.pojos.BranchManager;
import com.app.pojos.CourierBoy;
import com.app.pojos.CourierDetails;
import com.app.pojos.Status;
import com.app.pojos.User;


@Service
@Transactional
public class CourierBoyService implements ICourierBoyService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CourierBoyRepository courierRepository;
	
	@Autowired
	private JavaMailSender email;
	
	@Autowired
	private RequestRepository requestRepository;
	

	
//	@Override
//	public String assignCourierBoy(StatusOFCourierRequest request) {
//		User u =userRepository.findByEmail(request.getEmail());
//		
//	    
//		CourierDetails courier=courierRepo.findById(request.getId()).get();
//		CourierBoy  courierBoy =new CourierBoy(courier,Status.REQUESTED,LocalDateTime.now(),u);
//	 courierBoyRepo.save(courierBoy);
//	 return "Courier Boy Assigned Successfully";
//	}
//	
	
@Override
public String courierBoySignup(CourierBoySignupRequest userRequest) {
	System.out.println("in service layer" + userRequest);
	CourierBoy courierBoy = new CourierBoy();
	BeanUtils.copyProperties(userRequest, courierBoy);
	System.out.println(courierBoy);

	courierRepository.save(courierBoy);

	SimpleMailMessage message = new SimpleMailMessage();

	message.setTo(courierBoy.getEmail());
	message.setSubject("Welcome To Courier Management!!!");
	message.setText("Hello " + courierBoy.getFirstName() + "Your UserName :"+courierBoy.getEmail()+"Your Password:"+courierBoy.getPassword());
	
	email.send(message);
	return "Signup successfully";
	
}

@Override
public UserSigninRequest authenticateUser(String email, String password) {

	CourierBoy courierBoy= courierRepository.findByEmailAndPassword(email, password);
	
	return new UserSigninRequest(courierBoy.getId(), courierBoy.getFirstName(),courierBoy.getLastName(), courierBoy.getEmail(), courierBoy.getPhone(), courierBoy.getRole().name());
}

	@Override
	public List<CourierBoy> courierList() {
	
		return courierRepository.findAll();
	}

	@Override
	public String assignCourierBoy(StatusOFCourierRequest request) {
		
		return null;
	}
	
	@Override
	public long countOfCourier(int id) {
		
		return requestRepository.countOfCourier(id);
	}

}
