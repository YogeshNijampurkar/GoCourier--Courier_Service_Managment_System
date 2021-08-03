package com.app.controller;



import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/email")
@CrossOrigin
public class MailController {
	
	@Autowired
	private JavaMailSender emailCourier;
	
	
	public MailController() {
		
		
	}
	@PostConstruct
	public void init() {
		System.out.println("In init method");
	
	}
	
	@PostMapping("/emailSend")
    public String processMail() {
		SimpleMailMessage message=new SimpleMailMessage();
		message.setTo("rohinithute@gmail.com");
		message.setSubject("Enquirey about courier");
		message.setText("Hiii rohini,,welcome to courier manageme");
		emailCourier.send(message);
		return "mail sent succesfully";
	}
}
