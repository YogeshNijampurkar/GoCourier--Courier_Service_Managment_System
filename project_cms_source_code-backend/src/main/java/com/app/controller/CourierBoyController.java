package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CourierBoySignupRequest;
import com.app.dto.SigninRequest;
import com.app.dto.StatusOFCourierRequest;
import com.app.dto.UserSigninRequest;
import com.app.dto.UserSignupRequest;
import com.app.pojos.CourierBoy;
import com.app.service.ICourierBoyService;
import com.app.service.ICourierService;

@RestController
@RequestMapping("/courierboy")
@CrossOrigin
public class CourierBoyController {
	
	@Autowired
	private ICourierBoyService courierBoyService;
	
	@PostMapping("/assignCourierBoy")
	public String assignCourierBoy(@RequestBody StatusOFCourierRequest request) {
		
		
		
		
		return courierBoyService.assignCourierBoy(request); 
		
	}
	
	@GetMapping("/viewRequest")
	public List<CourierBoy> viewRequest() {
		
		
		
		
		return courierBoyService.courierList(); 
		
	}
	
	@PostMapping("/courierBoySignup")
	public String userSignup(@RequestBody CourierBoySignupRequest userSignup) {
		System.out.println(userSignup);
		
		
		return courierBoyService.courierBoySignup(userSignup); 
		
	}
	@PostMapping("/signin")
	public UserSigninRequest authenticateUser(@RequestBody SigninRequest request){
		System.out.println("in Signiin"+request);
	
		return courierBoyService.authenticateUser(request.getEmail(),request.getPassword());
	  
	}
	
	@GetMapping("/count/{id}")
	public long countOfCourier(@PathVariable int id){
		return courierBoyService.countOfCourier(id);
	}
	

}
