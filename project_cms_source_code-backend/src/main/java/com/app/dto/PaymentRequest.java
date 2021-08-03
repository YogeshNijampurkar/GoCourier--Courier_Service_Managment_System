package com.app.dto;

import java.time.LocalDate;
import java.util.Date;

import org.springframework.data.jpa.repository.Temporal;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;



public class PaymentRequest {
	
	private String paymentType;
	
	private String acctHolderName;
	private int courierId;
    private String paymentStatus;

	private int otp;
	private double amount;
	
public PaymentRequest() {
	
}
	public PaymentRequest(String paymentType, String acctHolderName,
		int courierId) {
	super();
	this.paymentType = paymentType;
	
	this.acctHolderName = acctHolderName;
	this.courierId = courierId;
}
	public String getPaymentType() {
		return paymentType;
	}
	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}
	
	public String getPaymentStatus() {
	return paymentStatus;
}
public void setPaymentStatus(String paymentStatus) {
	this.paymentStatus = paymentStatus;
}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	
	
	
	public String getAcctHolderName() {
		return acctHolderName;
	}
	public void setAcctHolderName(String acctHolderName) {
		this.acctHolderName = acctHolderName;
	}
	
	
	
	public int getOtp() {
		return otp;
	}
	public void setOtp(int otp) {
		this.otp = otp;
	}
	public int getCourierId() {
		return courierId;
	}
	public void setCourierId(int courierId) {
		this.courierId = courierId;
	}
	@Override
	public String toString() {
		return String.format(
				"PaymentRequest [paymentType=%s, acctHolderName=%s, courierId=%s, paymentStatus=%s, otp=%s, amount=%s]",
				paymentType, acctHolderName, courierId, paymentStatus, otp, amount);
	}

	
	
	
	

}
