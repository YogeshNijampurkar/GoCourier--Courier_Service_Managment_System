package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.CourierBoy;
import com.app.pojos.CourierDetails;
import com.app.pojos.Request;

public interface RequestRepository extends JpaRepository<Request, Integer> {
	
	
	@Query("select r from Request r  where r.courierBoyId=:id")
	List<Request> viewRequests(@Param("id")int id);
	
	@Query("select count(r.id) from Request r where r.courierBoyId.id=:id and r.Status='Requested'")
	 long countOfCourier(@Param("id")int id);
}
