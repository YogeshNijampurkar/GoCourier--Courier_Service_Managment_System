package com.app.dto;

import com.app.pojos.Role;

public class UserSignupRequest {

	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	private String password;
	private String confPassword;
	private Role role = Role.USER;
	
	
	public UserSignupRequest() {
		
	}


	public UserSignupRequest(String firstName, String lastName, String email, String phone, String password,
			String confPassword, Role role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.confPassword = confPassword;
		this.role = role;
	}


	public String getfirstName() {
		return firstName;
	}

	public void setfirstName(String fName) {
		this.firstName = fName;
	}

	public String getlastName() {
		return lastName;
	}

	public void setlName(String lName) {
		this.lastName = lName;
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

	public String getConfPassword() {
		return confPassword;
	}

	public void setConfPassword(String confPassword) {
		this.confPassword = confPassword;
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
				"UserSignupRequest [fName=%s, lName=%s, email=%s, phone=%s, password=%s, confPassword=%s]", firstName,
				lastName, email, phone, password, confPassword);
	}



	
	

}
