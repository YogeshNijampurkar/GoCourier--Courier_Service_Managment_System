package com.app.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CourierRepository;
import com.app.dao.PaymentRepository;
import com.app.dao.UserRepository;
import com.app.dto.PaymentRequest;
import com.app.dto.SigninRequest;
import com.app.dto.UserSigninRequest;
import com.app.dto.UserSignupRequest;
import com.app.pojos.CourierDetails;
import com.app.pojos.Payment;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class UserService implements IUserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private JavaMailSender emailCourier;

	@Autowired
	private PaymentRepository paymentRepository;
	
	@Autowired
	private CourierRepository courierRepository;
	
	

	@Override
	public String userSignup(UserSignupRequest userRequest) {
		System.out.println("in service layer" + userRequest);
		User user = new User();
		BeanUtils.copyProperties(userRequest, user);
		System.out.println(user);

		userRepository.save(user);

		SimpleMailMessage message = new SimpleMailMessage();

		message.setTo(user.getEmail());
		message.setSubject("Enquirey about courier");
		message.setText("Hello " + user.getFirstName() + ", Welcome to courier management!!!!...");
		emailCourier.send(message);
		return "Signup successfully";

	}

	@Override
	public String updateUserDetails(int id, String firstName, String lastName, String email, String phone,
			String password) {
		System.out.println("in service layer" + id + firstName + lastName + email + phone + password);
		User user = userRepository.findById(id).get();
		user = userRepository.findByEmail(email);
		if (user != null) {
			System.out.println(user);
			user.setFirstName(firstName);
			user.setLastName(lastName);
			
			user.setPhone(phone);
			
			System.out.println(user);
			userRepository.save(user);
			SimpleMailMessage message = new SimpleMailMessage();

			message.setTo(user.getEmail());
			message.setSubject("Updating Profile");
			message.setText("Hello " + user.getFirstName() + ", Your Profile has Been updated!!!!...");
			emailCourier.send(message);
			return "user updated sucessfully...";
		}
		return "user is not exists";
	}

	@Override
	public String forgotPassword(SigninRequest email) {
		Random random = new Random();
		User u = userRepository.findByEmail(email.getEmail());
		String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		String smallalpha="abcdefghijklmnopqrstuvwxyz";
		StringBuilder sb = new StringBuilder();
		
		
		for (int i = 0; i < 4; i++) {
			int index = random.nextInt(alphabet.length());
			char randomChar = alphabet.charAt(index);
			sb.append(randomChar);
		}
		for (int i = 0; i < 2; i++) {
			int index = random.nextInt(smallalpha.length());
			char randomChar = smallalpha.charAt(index);
			sb.append(randomChar);
		}
		String randomString = sb.toString();
		SimpleMailMessage message = new SimpleMailMessage();
		System.out.println("In service layer : " + email);
		String password = randomString + "#" + random.nextInt(1000);
		if (u != null) {
			message.setTo(u.getEmail());
			message.setSubject("Forgot password :");
			message.setText("your new password is : " + password);
			u.setPassword(password);
			userRepository.save(u);
			emailCourier.send(message);
			return "New password is sent to your email id : " + email.getEmail();
		}
		return "Sorry,Your Email Id is not exist..!!";

	}

	@Override
	public UserSigninRequest authenticateUser(String email, String password) {

		User user= userRepository.findByEmailAndPassword(email, password);
		System.out.println(user+" "+email+" "+password);
		return new UserSigninRequest(user.getId(), user.getFirstName(),user.getLastName(), user.getEmail(), user.getPhone(), user.getRole().name());
	}

	@Override
	public int addPayment(int id, PaymentRequest paymentRequest) {
		Payment payment = new Payment(paymentRequest.getAcctHolderName(),"Card",paymentRequest.getAmount(), LocalDateTime.now(), paymentRequest.getOtp(),"Failed");
		User user = userRepository.findById(id).get();
		CourierDetails courierDetails=courierRepository.findById(paymentRequest.getCourierId()).get();
		System.out.println("in service : " + payment);
		payment.setUser(user);
		payment.setCourierId(courierDetails);
		SimpleMailMessage message = new SimpleMailMessage();
		if (user != null) {
			Random random = new Random();
			int otp = random.nextInt(10000);
			message.setTo(user.getEmail());
			message.setSubject("Payment OTP:");
			message.setText("Hello," + user.getFirstName() + ", your Otp is :" + otp);
			System.out.println("your email : " + user.getEmail());
             payment.setOtp(otp);
			emailCourier.send(message);
			System.out.println(payment);
			paymentRepository.save(payment);
		
			return payment.getId();
		}
		return 0;
	}
	
	@Override
	public String confirmOtp(int id,PaymentRequest rq) {
		
		Payment p=paymentRepository.findById(id).get();
		if(p.getOtp()==rq.getOtp()) {
			p.setPaymentStatus("PAID");
		    paymentRepository.save(p);
			return "Successfull";
		}
		
		return "failed";
	}
	
	@Override
	public List<User> viewCourierBoyList() {
		List<User> list=new ArrayList<>();
		
		for (User user : userRepository.findAll()) {
			if(user.getRole().equals(Role.COURIERBOY))
				list.add(user);
			
		} 
		return list;
	}
	
	@Override
	public String trackStatusOfCourier(int id) {
		return courierRepository.trackStatusOfCourier(id);
	}
}
