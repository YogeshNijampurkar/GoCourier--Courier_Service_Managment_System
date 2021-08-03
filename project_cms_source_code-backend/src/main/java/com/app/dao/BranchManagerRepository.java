package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.BranchManager;
import com.app.pojos.CourierBoy;



public interface BranchManagerRepository extends JpaRepository<BranchManager, Integer> {
	BranchManager findByEmailAndPassword(String email,String Password);
	
	
	@Query("select b from BranchManager b")
	List<BranchManager> findBranchName();
	
	@Query("select b from BranchManager b")
	List<BranchManager> viewAllBranch();
	
	
	

	
	
	
	

}
