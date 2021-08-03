package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name="branch_manager")
public class BranchManager extends BaseEntity {
	@Column(length=30)
	@NotBlank(message="name must be supplied")
	private String branchName;
	@Column(length=20,unique=true)
	@NotBlank(message="Email is required")
	@Length(min = 5,max = 20,message = "Invalid Length!!!!")
	private String email;
	@Column(length=15)
	private String phone;
	@Column(length = 20,nullable = false)
	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Invalid password!")
	private String password;
	@OneToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	private Address address;

	
@OneToMany(mappedBy="branch",fetch=FetchType.EAGER,cascade=CascadeType.ALL,orphanRemoval=true)
	
	private List<CourierDetails> courierList=new ArrayList<>();
@OneToMany(mappedBy="branchId",cascade=CascadeType.ALL,orphanRemoval=true)
private List<Request> requestList=new ArrayList<>();
	public BranchManager() {
		
	}

	
	public List<Request> getRequestList() {
		return requestList;
	}


	public void setRequestList(List<Request> requestList) {
		this.requestList = requestList;
	}


	public String getBranchName() {
		return branchName;
	}
	public BranchManager(String branchName, String email,String phone, String password,Address address) {
		super();
		this.branchName = branchName;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.address = address;
	}
	public BranchManager(String branchName, String email,String phone, String password) {
		super();
		this.branchName = branchName;
		this.email = email;
		this.phone = phone;
		this.password = password;
		
	}
	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Address getAddress() {
		return address;
	}
	
//	public List<Request> getReqts() {
//		return reqts;
//	}
//
//
//	public void setReqts(List<Request> reqts) {
//		this.reqts = reqts;
//	}


	public List<CourierDetails> getCourierList() {
		return courierList;
	}


	public void setCourierList(List<CourierDetails> courierList) {
		this.courierList = courierList;
	}


	public void setAddress(Address address) {
		this.address = address;
	}
	
	public void addAddress(Address branch) {
		address=new Address(branch.getPincode(), branch.getArea(), branch.getHouseno(),branch.getTaluka(),branch.getCity(), branch.getDistrict(), branch.getCountry(), AddressType.BRANCH_ADDRESS);
	}
	
	
	
	@Override
	public String toString() {
		return String.format("BranchManager [Id=%d,branchName=%s, email=%s, phone=%s, password=%s, address=%s]",getId(), branchName,
				email, phone, password, address);
	}
	
	
	
	

}
