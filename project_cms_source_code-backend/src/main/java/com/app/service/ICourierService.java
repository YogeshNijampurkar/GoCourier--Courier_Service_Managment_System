package com.app.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.app.dto.CourierDetailsRequest;
import com.app.dto.UserSignupRequest;
import com.app.pojos.BranchManager;
import com.app.pojos.CourierDetails;

public interface ICourierService {
	
	
	
	
	List<CourierDetails> courierList(int id);


	int addCourierDetails(CourierDetailsRequest courier, int id);
	
////   BranchManager findByBranchname(String name);
//	String trackStatus(int id);
	
	//genarate Id for courier
	List<CourierDetails> generateCourierId(@Param("id")int id);
	
	long countOfCourier(int id);

}
