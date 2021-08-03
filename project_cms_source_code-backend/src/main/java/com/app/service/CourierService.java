package com.app.service;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BranchManagerRepository;
import com.app.dao.CourierRepository;
import com.app.dao.PaymentRepository;
import com.app.dao.UserRepository;
import com.app.dto.CourierDetailsRequest;
import com.app.pojos.BranchManager;
import com.app.pojos.CourierDetails;
import com.app.pojos.DeliveryType;
import com.app.pojos.Payment;
import com.app.pojos.User;

@Service
@Transactional
public class CourierService implements ICourierService {
	@Autowired
	private CourierRepository courierRepository;
	@Autowired
	private BranchManagerRepository branchManagerRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private JavaMailSender emailCourier;
	@Autowired
	private PaymentRepository paymentRepository;

@Override
public int addCourierDetails(CourierDetailsRequest courier,int id) {
	
	DeliveryType enu=null;
	System.out.println("Hiii"+courier.getPrice()+" ui type "+courier.getDeliveryType());
	
	System.out.println(courier);
//	Payment payment=new Payment();
	User user =userRepository.findById(id).get();
//	payment=paymentRepository.findByPaymentId(id);
	
//	if(payment.getPaymentStatus().equals("PAID")) {
		BranchManager b = branchManagerRepository.findById(courier.getBranchId()).get();
		
	if(courier.getDeliveryType().equals("FAST"))
	 enu=DeliveryType.FAST;
	if(courier.getDeliveryType().equals("NORMAL"))
	enu=DeliveryType.NORMAL;
	System.out.println("IT is pickutp time"+courier.getPickupDateTime());

	CourierDetails courierDetails = new CourierDetails(courier.getWeight(), courier.getLength(), courier.getBreadth(),courier.getPrice(),courier.getRecipientfName(),courier.getRecipientlName(),courier.getSenderfName(),courier.getSenderlName(),"Requested", courier.getPickupDateTime(),enu, courier.getUser(), courier.getSourceAddress(), courier.getDestinationAddress(), LocalDateTime.now(), b);
	SimpleMailMessage message=new SimpleMailMessage();
	if(user !=null) {
		message.setTo(user.getEmail());
		message.setSubject("Courier Added :");
		courierDetails.setUser(user);
		
		System.out.println("your email : "+user.getEmail());
		courierRepository.save(courierDetails);
		message.setText("Hello,"+user.getFirstName()+",Your Courier Id is #"+courierDetails.getId()+", Your Have to pay Rs."+courierDetails.getPrice()+"to add a courier successfully...");
		emailCourier.send(message);
		return courierDetails.getId();
		}
	
	
	
	return 0;
}

@Override
public List<CourierDetails> courierList(int id) {
	
	return userRepository.findById(id).get().getCourierList();
}



//@Override
//public BranchManager findByBranchname(String name) {
//	System.out.println(courierRepository.find(name));
//	return  courierRepository.find(name);
//}



@Override
public List<CourierDetails> generateCourierId(int id) {
	
	return courierRepository.generateCourierId(id);
}

@Override
public long countOfCourier(int id) {
	long c=courierRepository.countOfCourier(id);
	System.out.println(c);
	return c;
}

}
