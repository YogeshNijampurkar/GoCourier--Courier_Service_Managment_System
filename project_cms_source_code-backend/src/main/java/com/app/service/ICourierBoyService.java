package com.app.service;

import java.util.List;

import com.app.dto.CourierBoySignupRequest;
import com.app.dto.SigninRequest;
import com.app.dto.StatusOFCourierRequest;
import com.app.dto.UserSigninRequest;
import com.app.dto.UserSignupRequest;
import com.app.pojos.CourierBoy;
import com.app.pojos.CourierDetails;

public interface ICourierBoyService {
	
  String courierBoySignup(CourierBoySignupRequest user);
	
	
	UserSigninRequest authenticateUser(String email,String password);
	String assignCourierBoy(StatusOFCourierRequest request);
	
	List<CourierBoy> courierList();
	
	 long countOfCourier(int id);
	

}
