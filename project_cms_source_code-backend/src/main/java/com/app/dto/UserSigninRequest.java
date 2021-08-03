
package com.app.dto;

import com.app.pojos.Role;

public class UserSigninRequest {
	private int userid;
	private String firstName;
	private String lastName;
	private String email;
	private String phone;

	private String role;

	public UserSigninRequest() {

	}

	public UserSigninRequest(int userid, String firstName, String lastName, String email, String phone, String role) {
		super();
		this.userid = userid;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.role = role;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return String.format(
				"UserSignupRequest [id=%d,fName=%s, lName=%s, email=%s, phone=%s, password=%s, confPassword=%s]",
				userid, firstName, lastName, email, phone);
	}

}
