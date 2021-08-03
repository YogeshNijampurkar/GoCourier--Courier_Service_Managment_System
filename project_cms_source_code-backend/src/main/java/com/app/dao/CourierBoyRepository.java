package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.CourierBoy;
import com.app.pojos.CourierDetails;
import com.app.pojos.User;


public interface CourierBoyRepository extends JpaRepository<CourierBoy, Integer> {
	CourierBoy findByEmailAndPassword(String email,String Password);
	  
	
	//List of Courier Boy
	@Query("select c from CourierBoy c  where c.city=:city")
	List<CourierBoy> findCourierBoy(@Param("city") String city);
	
	//To view courier boy to particular branch
	@Query("select c from CourierBoy c  where c.email=:email")
	CourierBoy  findByEmail(@Param("email") String email);
	


}
