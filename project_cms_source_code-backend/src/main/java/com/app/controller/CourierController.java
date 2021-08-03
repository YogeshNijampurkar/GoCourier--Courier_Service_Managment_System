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

import com.app.dto.CourierDetailsRequest;
import com.app.pojos.CourierDetails;
import com.app.service.ICourierService;

@RestController
@RequestMapping("/courier")
@CrossOrigin
public class CourierController {
	@Autowired
	private ICourierService courierService;
	
	
	
	public CourierController() {
		
	}
	

	
	@PostMapping("/addCourier/{id}")
	public int courierAdd(@RequestBody CourierDetailsRequest courier,@PathVariable int id) {

		System.out.println("in courier test "+courier);

        
		 return courierService.addCourierDetails(courier,id);
         

		
	}
	
	@GetMapping("/list/{id}")
	public List<CourierDetails> courierList(@PathVariable int id){
		return courierService.courierList(id);
	}
	
//	@GetMapping("findBranch/{name}")
//	public BranchManager findBranchid(@PathVariable String name) {
//		return courierService.findByBranchname(name);
//	}
	
//	@GetMapping("/status/{id}")
//	public List<CourierDetails> trackStatus(@PathVariable int id){
//		return courierService.trackStatus(id);
//	}
	
	@GetMapping("/generateId/{id}")
	public List<CourierDetails> generatedId(@PathVariable int id){
		return courierService.generateCourierId(id);
	}
	
	@GetMapping("/count/{id}")
	public long countOfCourier(@PathVariable int id){
		return courierService.countOfCourier(id);
	}
}
