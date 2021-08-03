package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PaymentRequest;
import com.app.dto.SigninRequest;
import com.app.dto.UserSigninRequest;
import com.app.dto.UserSignupRequest;
import com.app.pojos.User;
import com.app.service.ICourierService;
import com.app.service.IPaymentService;
import com.app.service.IUserService;
@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	@Autowired
	private IUserService userService;
	
@Autowired
private ICourierService courierService;
	  @Autowired
	  private IPaymentService paymentService;
	
	public UserController() {
		
	}
	@PostMapping("/userSignup")
	public String userSignup(@RequestBody UserSignupRequest userSignup) {
		System.out.println(userSignup);
		
		
		return userService.userSignup(userSignup); 
		
	}
	
	@PostMapping("/forgotPassword")
	public String forgotPassword(@RequestBody SigninRequest email) {
		System.out.println("In conrtoller : "+email);
		return userService.forgotPassword(email);
	}
	
	@PutMapping("/update/{id}")
	public String updateDetails(@PathVariable int id,@RequestBody UserSignupRequest user) {
		System.out.println("in controller"+id);
		return userService.updateUserDetails(id, user.getfirstName(),user.getlastName(),user.getEmail(),user.getPhone(),user.getPassword());

	}
	@PostMapping("/signin")
	public UserSigninRequest authenticateUser(@RequestBody SigninRequest request){
		System.out.println("in Signiin"+request);
	
		return userService.authenticateUser(request.getEmail(),request.getPassword());
	  
	}
	
		

	@PostMapping("/addPayment/{id}")
	public int addPayment(@PathVariable int id,@RequestBody PaymentRequest payment) {
		System.out.println(payment);
		
	
		return userService.addPayment(id,payment);
		
	}
	
	@PostMapping("/addPayment/otp/{id}")
	public String confirmOtp(@PathVariable int id,@RequestBody PaymentRequest payment) {
		System.out.println(payment);
		
		return userService.confirmOtp(id, payment); 
		
	}
	
	@GetMapping("/viewCourierBoy")
	public List<User> viewCourierBoy(){
		return userService.viewCourierBoyList();
	}
	

	@GetMapping("/trackStatus/{id}")
	public String trackStatus(@PathVariable int id){
		return  userService.trackStatusOfCourier(id);
	}
	
	
	
	
	
	
	
	

}
