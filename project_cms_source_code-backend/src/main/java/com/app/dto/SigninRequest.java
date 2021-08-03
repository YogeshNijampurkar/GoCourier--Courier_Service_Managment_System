package com.app.dto;

public class SigninRequest {
	
	private String email;
	private String password;
	
	public SigninRequest() {
		
	}

	public SigninRequest(String email, String password) {
		super();
		this.email = email;
		this.password = password;
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

	@Override
	public String toString() {
		return String.format("SigninRequest [email=%s, password=%s]", email, password);
	}
	
	

}
