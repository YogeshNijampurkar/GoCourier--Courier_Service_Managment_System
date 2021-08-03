package com.app.dto;

import com.app.pojos.Role;

public class CourierBoySignupRequest {
	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	private String password;
    private String city;
	private Role role = Role.COURIERBOY;
	
	
	public CourierBoySignupRequest() {
		
	}


	public CourierBoySignupRequest(String firstName, String lastName, String email, String phone, String password,
			String city, Role role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.city = city;
		this.role = role;
	}
	
	


	public CourierBoySignupRequest(String firstName, String lastName, String email, String phone) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
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


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public Role getRole() {
		return role;
	}


	public void setRole(Role role) {
		this.role = role;
	}


	@Override
	public String toString() {
		return String.format(
				"CourierBoySignupRequest [firstName=%s, lastName=%s, email=%s, phone=%s, password=%s, city=%s, role=%s]",
				firstName, lastName, email, phone, password, city, role);
	}





	
	

}