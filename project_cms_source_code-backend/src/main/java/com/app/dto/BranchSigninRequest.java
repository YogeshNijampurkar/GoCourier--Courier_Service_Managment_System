package com.app.dto;

public class BranchSigninRequest {
  private int branchId;
	private String branchName;

	private String email;

	private String phone;

	private String city;
	private String addressType;

	public BranchSigninRequest() {

	}

	public BranchSigninRequest(int branchId, String branchName, String email,  String phone,
			String city, String addressType) {
		super();
		this.branchId = branchId;
		this.branchName = branchName;
		this.email = email;
		
		this.phone = phone;
		this.city = city;
		this.addressType = addressType;
	}

	public int getBranchId() {
		return branchId;
	}

	public void setBranchId(int branchId) {
		this.branchId = branchId;
	}

	public String getBranchName() {
		return branchName;
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

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddressType() {
		return addressType;
	}

	public void setAddressType(String addressType) {
		this.addressType = addressType;
	}

	@Override
	public String toString() {
		return String.format(
				"BranchSigninRequest [branchId=%s, branchName=%s, email=%s,  phone=%s, city=%s, addressType=%s]",
				branchId, branchName, email, phone, city, addressType);
	}







}
