package com.app.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.PaymentRepository;
import com.app.dto.PaymentRequest;
import com.app.pojos.Payment;
import com.app.pojos.User;

@Service
@Transactional
public class PaymentService implements IPaymentService {
	@Autowired
	private PaymentRepository paymentRepository;

	@Override
	public String addPayment(PaymentRequest paymentRequest) {
//		Payment payment =new Payment();
//		
////		User user =userRepository.findById(id).get();
//		
//		System.out.println(payment);
//		paymentRepository.save(payment);
		return "Courier Booked successfully";
	}

}
