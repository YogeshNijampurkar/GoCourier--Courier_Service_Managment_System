package com.app.dto;

public class ViewBranchNameRequest {
	
	private int id;
	private String branchName;
	
	public ViewBranchNameRequest() {
		
	}

	public ViewBranchNameRequest(int id, String branchName) {
		super();
		this.id = id;
		this.branchName = branchName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBranchName() {
		return branchName;
	}

	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}

	@Override
	public String toString() {
		return String.format("ViewBranchNameRequest [id=%s, branchName=%s]", id, branchName);
	}
	
	

}
