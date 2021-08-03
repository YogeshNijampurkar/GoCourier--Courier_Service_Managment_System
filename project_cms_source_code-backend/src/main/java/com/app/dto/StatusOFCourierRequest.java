package com.app.dto;

public class StatusOFCourierRequest {
	private int id;
	private int branchId;
	private String status;
	private String email;
	
	
	public StatusOFCourierRequest() {
		
	}
	
	
	public StatusOFCourierRequest(int id, int branchId, String status, String email) {
		super();
		this.id = id;
		this.branchId = branchId;
		this.status = status;
		this.email = email;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	public int getBranchId() {
		return branchId;
	}

	public void setBranchId(int branchId) {
		this.branchId = branchId;
	}
	
	

	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	@Override
	public String toString() {
		return String.format("StatusOFCourierRequest [id=%s, branchId=%s, status=%s,email=%s]", id, branchId, status,email);
	}



	
	

}
