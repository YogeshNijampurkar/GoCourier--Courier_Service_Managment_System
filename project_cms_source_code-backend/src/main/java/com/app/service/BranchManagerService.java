package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BranchManagerRepository;
import com.app.dao.CourierBoyRepository;
import com.app.dao.CourierRepository;
import com.app.dao.PaymentRepository;
import com.app.dao.UserRepository;
import com.app.dto.BranchSigninRequest;
import com.app.dto.CourierBoySignupRequest;
import com.app.dto.RegisterBranchRequest;
import com.app.dto.StatusOFCourierRequest;
import com.app.dto.ViewBranchNameRequest;
import com.app.pojos.Address;
import com.app.pojos.AddressType;
import com.app.pojos.BranchManager;
import com.app.pojos.CourierBoy;
import com.app.pojos.CourierDetails;
import com.app.pojos.Payment;
import com.app.pojos.User;

@Service
@Transactional
public class BranchManagerService implements IBranchManagerService {
	@Autowired
	private BranchManagerRepository branchrepo;
	
	@Autowired
	private CourierRepository courierRepo;
	
	@Autowired
	private CourierBoyRepository courierBoyRepo;
	
	@Autowired
	private PaymentRepository paymentRepo;
	
	@Autowired
	private UserRepository userRepo;
	

	@Override
	public String registerBranch(RegisterBranchRequest branch) {
		System.out.println("before " + branch);
		BranchManager branchmanager = new BranchManager(branch.getBranchName(), branch.getEmail(), branch.getPhone(),
				branch.getPassword());
		branchmanager.addAddress(new Address(branch.getPincode(), branch.getArea(), branch.getHouseno(),branch.getCity(),branch.getCity(), branch.getCity(),"India",AddressType.BRANCH_ADDRESS));

		branchrepo.save(branchmanager);

		return "Branch Registered Successfully......";
	}

	@Override
	public BranchSigninRequest signinBranchManager(String email, String password) {
		BranchManager m= branchrepo.findByEmailAndPassword(email, password);
		System.out.println(m);
	m.getRequestList().forEach(System.out::println);
		return new BranchSigninRequest(m.getId(), m.getBranchName(), m.getEmail(),m.getPhone(),m.getAddress().getCity(),m.getAddress().getAddressType().name());
	}
	
	@Override
	public List<RegisterBranchRequest> getAllBranch() {
		
		List<RegisterBranchRequest> list= new ArrayList<>();
		for (BranchManager branchManager :branchrepo.findAll()) {
			list.add(new RegisterBranchRequest(branchManager.getId(), branchManager.getBranchName(), branchManager.getEmail(), branchManager.getPhone(), branchManager.getAddress().getPincode(), branchManager.getAddress().getTaluka(),branchManager.getAddress().getDistrict(),branchManager.getAddress().getCountry(), branchManager.getAddress().getArea(), branchManager.getAddress().getHouseno(), branchManager.getAddress().getCity()) );
			
			
		}
		

	return list;
	}
	
	
	///dropdown
	@Override
	public List<ViewBranchNameRequest> findBranchName() {
		List<ViewBranchNameRequest> listOfBranchName = new ArrayList<>();
		
		for (BranchManager viewBranchNameRequest :branchrepo.findBranchName()) {
			listOfBranchName.add(new ViewBranchNameRequest(viewBranchNameRequest.getId(), viewBranchNameRequest.getBranchName()));
			System.out.println(viewBranchNameRequest);
		} 
		return listOfBranchName;
	}
	
	@Override
	public List<CourierDetails> branchViewList(int id) {
		 List<CourierDetails> list =new ArrayList<>();
		for (CourierDetails c :  courierRepo.viewCourierDetails(id)) {
			Payment payment = paymentRepo.findByPaymentId(c.getId());
			System.out.println("Payement id"+payment);
			System.out.println("list of courier"+c.getUser());
			User user=userRepo.findById(c.getUser().getId()).get();
//			System.out.println(user.getFirstName());
//			c.;
			if(payment!=null) {
				
				if(payment.getPaymentStatus().equals("PAID"))
					c.getUser().setFirstName(user.getFirstName());
					list.add(c);
			}
			
			
		}
		 
		return list;
	}
	
	@Override
	public String changeStatus(StatusOFCourierRequest changeStatusRequest) {
		CourierDetails courier=courierRepo.findById(changeStatusRequest.getId()).get();
		courier.setStatus(changeStatusRequest.getStatus());
		if(changeStatusRequest.getBranchId()!=0)
		courier.setBranch(branchrepo.findById(changeStatusRequest.getBranchId()).get());
		
          courierRepo.save(courier);
		return "updated";
	}
	
	
	@Override
	public List<CourierBoySignupRequest> findCourierBoy(String city) {
		List<CourierBoySignupRequest> courierBoyList =new ArrayList<CourierBoySignupRequest>();
		
		for (CourierBoy c : courierBoyRepo.findCourierBoy(city)) {
			courierBoyList.add(new CourierBoySignupRequest(c.getFirstName(),c.getLastName() , c.getEmail(), c.getPhone()));
			
		}
		return courierBoyList;
	}
	
	@Override
	public long countOfCourier(int id) {
		long c=courierRepo.countOfCourier(id);
		System.out.println(c);
		return c;
	}
	
	@Override
	public long countOfCourierDelievred(int id) {
		
		return courierRepo.countOfCourierDelievred(id);
	}
	
	@Override
	public long countOfTotalCourier(int id) {
		
		return courierRepo.countOfTotalCourier(id);
	}


}
