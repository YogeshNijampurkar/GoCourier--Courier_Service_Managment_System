package com.app.pojos;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="address")
public class Address extends BaseEntity {
	@Column(length=10, nullable = false)
  private int pincode;
	@Column(length=50 )
  private String area;
	@Column(length=10)
  private String houseno;
	@Column(length=10)
  private String taluka;
	@Column(length=20)
  private String district;
	@Column(length=50)
  private String country;
	@Column(length=50)
	  private String city;
  @Enumerated(EnumType.STRING)
  private AddressType addressType;
  
 public Address() {
	 
 }
  


public Address(int pincode, String area, String houseno, String taluka, String district, String country, String city,
		AddressType addressType) {
	super();
	this.pincode = pincode;
	this.area = area;
	this.houseno = houseno;
	this.taluka = taluka;
	this.district = district;
	this.country = country;
	this.city = city;
	this.addressType = addressType;
}



public int getPincode() {
	return pincode;
}


public void setPincode(int pincode) {
	this.pincode = pincode;
}


public String getArea() {
	return area;
}


public void setArea(String area) {
	this.area = area;
}


public String getCity() {
	return city;
}



public void setCity(String city) {
	this.city = city;
}



public String getHouseno() {
	return houseno;
}


public void setHouseno(String houseno) {
	this.houseno = houseno;
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


public AddressType getAddressType() {
	return addressType;
}


public void setAddressType(AddressType addressType) {
	this.addressType = addressType;
}





@Override
public String toString() {
	return String.format(
			"Address [pincode=%s, area=%s, houseno=%s, taluka=%s, district=%s, country=%s, addressType=%s]", pincode,
			area, houseno, taluka, district, country, addressType);
}
  
  
}
