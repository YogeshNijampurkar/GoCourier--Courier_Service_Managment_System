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

import com.app.dto.CourierBoySignupRequest;
import com.app.dto.RegisterBranchRequest;
import com.app.dto.SigninRequest;
import com.app.dto.StatusOFCourierRequest;
import com.app.dto.ViewBranchNameRequest;
import com.app.pojos.BranchManager;
import com.app.pojos.CourierBoy;
import com.app.pojos.CourierDetails;
import com.app.service.IBranchManagerService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class BranchManagerController {
	@Autowired
	private IBranchManagerService branchmanagerservice;
	
	
	public BranchManagerController() {
		
	}
	
	
public BranchManagerController(IBranchManagerService branchmanagerservice) {
	this.branchmanagerservice=branchmanagerservice;
		
	}

@PostMapping("/signin")
public ResponseEntity<?> authenticateBranchManager(@RequestBody SigninRequest request){
	System.out.println("in Signiin"+request);

	return new ResponseEntity<>(branchmanagerservice.signinBranchManager(request.getEmail(),request.getPassword()),HttpStatus.OK);
  
}

@PostMapping("/signUp")
public String registerBranchManager(@RequestBody RegisterBranchRequest branchRegister){
	System.out.println("in Signiin"+branchRegister);
	branchmanagerservice.registerBranch(branchRegister);
  return  "Branch successfully Registerd...";
}
	@GetMapping("/listOfBranch")
	public List<RegisterBranchRequest> getAllBranch(){
		return branchmanagerservice.getAllBranch();
	}
	
	@GetMapping("/listOfBranchName")
	public List<ViewBranchNameRequest> getAllBranchName(){
		
		return branchmanagerservice.findBranchName();
	}
	
	@GetMapping("/listOfCourier/{id}")
	public List<CourierDetails> getAllCouriers(@PathVariable int id ){
	
		return branchmanagerservice.branchViewList(id);
	}
	

	@PutMapping("/changeStatus")
	public String changeStatus(@RequestBody StatusOFCourierRequest statusRequest) {
		return branchmanagerservice.changeStatus(statusRequest);
	}
	
	
	@PostMapping("/listOfCourierBoy")
	public List<CourierBoySignupRequest> getAllCourierBoy(@RequestBody CourierBoySignupRequest city){
		
		System.out.println(city);
		return branchmanagerservice.findCourierBoy(city.getCity());
	}
	
	@GetMapping("/count/{id}")
	public long countOfCourier(@PathVariable int id){
		return branchmanagerservice.countOfCourier(id);
	}
	
	@GetMapping("/countDelivered/{id}")
	public long countOfCourierDelievred(@PathVariable int id){
		return branchmanagerservice.countOfCourierDelievred(id);
	}
	
	@GetMapping("/countTotalCourier/{id}")
	public long countOfTotalCourier(@PathVariable int id){
		return branchmanagerservice.countOfTotalCourier(id);
	}
	
	

}
