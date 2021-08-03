package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PaymentRequest;
import com.app.dto.UserSignupRequest;
import com.app.service.IPaymentService;

@RestController
@RequestMapping("/payment")
@CrossOrigin
public class PaymentController {
  @Autowired
  private IPaymentService paymentService;
	

//@PostMapping("/addPayment")
//public String userSignup(@RequestBody PaymentRequest payment) {
//	System.out.println(payment);
//	
//	return paymentService.addPayment(payment); 
//	
//}
}
