package com.app.service;

import java.util.List;

import com.app.dto.PaymentRequest;
import com.app.dto.SigninRequest;
import com.app.dto.UserSigninRequest;
import com.app.dto.UserSignupRequest;
import com.app.pojos.User;

public interface IUserService {
	String userSignup(UserSignupRequest user);
	
	
	UserSigninRequest authenticateUser(String email,String password);
	String forgotPassword(SigninRequest email);
	String updateUserDetails(int id, String firstName, String lastName, String email, String phone, String password);
	int addPayment(int id,PaymentRequest payment);


	String confirmOtp(int id, PaymentRequest rq);
	List<User> viewCourierBoyList();
	String  trackStatusOfCourier(int id);
}
