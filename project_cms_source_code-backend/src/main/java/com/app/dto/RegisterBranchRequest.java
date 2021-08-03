package com.app.dto;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import com.app.pojos.Address;

public class RegisterBranchRequest {
  private int branchId;
	private String branchName;

	private String email;

	private String password;
	private String phone;
	private int pincode;
	private String taluka;
	private String district;
	private String country;
	private String area;
	private String houseno;
	private String city;

	public RegisterBranchRequest() {

	}



	public RegisterBranchRequest(String branchName, String email, String password, String phone, int pincode,
			String taluka, String district, String country, String area, String houseno, String city) {
		super();
		this.branchName = branchName;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.pincode = pincode;
		this.taluka = taluka;
		this.district = district;
		this.country = country;
		this.area = area;
		this.houseno = houseno;
		this.city = city;
	}
	



	public RegisterBranchRequest(int branchId, String branchName, String email, String phone,
			int pincode, String taluka, String district, String country, String area, String houseno, String city) {
		super();
		this.branchId = branchId;
		this.branchName = branchName;
		this.email = email;
		
		this.phone = phone;
		this.pincode = pincode;
		this.taluka = taluka;
		this.district = district;
		this.country = country;
		this.area = area;
		this.houseno = houseno;
		this.city = city;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getTaluka() {
		return taluka;
	}

	public void setTaluka(String taluka) {
		this.taluka = taluka;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}
	

	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getHouseno() {
		return houseno;
	}

	public void setHouseno(String houseno) {
		this.houseno = houseno;
	}

	@Override
	public String toString() {
		return String.format(
				"RegisterBranchRequest [branchName=%s, email=%s, password=%s, phone=%s, pincode=%s, taluka=%s, district=%s, country=%s, area=%s, houseno=%s]",
				branchName, email, password, phone, pincode, taluka, district, country, area, houseno);
	}

}
