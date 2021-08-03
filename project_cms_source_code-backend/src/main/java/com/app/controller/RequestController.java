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

import com.app.dto.RequestDTO;
import com.app.dto.StatusOFCourierRequest;
import com.app.service.IRequestService;

@RestController
@RequestMapping("/request")
@CrossOrigin
public class RequestController {
	@Autowired
	private IRequestService requestService;
	
	@PostMapping("/assignCourierBoy")
	public String assignCourierBoy(@RequestBody StatusOFCourierRequest request) {
		
		
		
		
		return requestService.assignCourierBoy(request); 
		
	}
	
	@GetMapping("/viewRequest/{id}")
	public List<RequestDTO> viewRequest(@PathVariable int id) {
		
		
		
		
		return requestService.viewRequest(id); 
		
	}

}
