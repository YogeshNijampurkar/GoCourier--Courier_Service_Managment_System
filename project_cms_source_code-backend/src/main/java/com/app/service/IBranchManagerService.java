package com.app.service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.dto.BranchSigninRequest;
import com.app.dto.CourierBoySignupRequest;
import com.app.dto.RegisterBranchRequest;
import com.app.dto.StatusOFCourierRequest;
import com.app.dto.ViewBranchNameRequest;
import com.app.pojos.BranchManager;
import com.app.pojos.CourierBoy;
import com.app.pojos.CourierDetails;
import com.app.pojos.User;
public interface IBranchManagerService {
BranchSigninRequest signinBranchManager(String email,String password);
	
	String registerBranch(RegisterBranchRequest registerBranch);
	
  List<RegisterBranchRequest> getAllBranch();
  
  //for dropdwon
 List<ViewBranchNameRequest> findBranchName();
 

 List<CourierDetails> branchViewList(int id);
 
 String changeStatus(StatusOFCourierRequest changeStatusRequest);
 
 List<CourierBoySignupRequest> findCourierBoy(String city);
 
 long countOfCourier(int id);
 

 long countOfCourierDelievred(@Param("id")int id);

 long countOfTotalCourier(@Param("id")int id);
}
