package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.dto.StatusOFCourierRequest;
import com.app.pojos.BranchManager;
import com.app.pojos.CourierDetails;
import com.app.pojos.User;

public interface CourierRepository extends JpaRepository<CourierDetails, Integer> {
//	@Query("select c from CourierDetails c join fetch c.branch where c.branch.branchName=:name")
//	BranchManager find(@Param("name")String name);
	
	@Query("select c from CourierDetails c  where c.branch.id=:id")
	List<CourierDetails> viewCourierDetails(@Param("id")int id);
	
	
	@Modifying
	@Query("update CourierDetails c set c.status=:status,c.branch.id=:bid where c.id=:id")
	int changeStatus(@Param("status")String status,@Param("bid")int bid,@Param("id")int id);

	@Query("select c from CourierDetails c  where c.id=:id")
	List<CourierDetails> trackStatus(@Param("id")int id);
	
	
	//Id generated after courier added
	@Query("select c from CourierDetails c  where c.user.id=:id and c.status='Requested'")
	List<CourierDetails> generateCourierId(@Param("id")int id);
   //new Request
	  @Query("select count(c.id) from CourierDetails c where c.branch.id=:id and c.status='Requested'")
	 long countOfCourier(@Param("id")int id);
	  //delivered
	  @Query("select count(c.id) from CourierDetails c where c.branch.id=:id and c.status='Delivered'")
		 long countOfCourierDelievred(@Param("id")int id);
	  //total courier count
	  @Query("select count(c.id) from CourierDetails c where c.branch.id=:id")
		 long countOfTotalCourier(@Param("id")int id);
	  @Query("select c.status from CourierDetails c where c.id=:id")
	  String trackStatusOfCourier(@Param("id")int id);
}
