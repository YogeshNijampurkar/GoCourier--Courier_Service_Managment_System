package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.CourierDetails;
import com.app.pojos.Payment;
import com.app.pojos.User;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
	
// @Query("Select p from Payment p where p.user.id=:id")	
// Payment findByPaymentId(@Param("id")int id);
 
 
 @Query("Select p from Payment p where p.courier.id=:id")	
 Payment findByPaymentId(@Param("id")int id);

}
