package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.*;

import javax.persistence.FetchType;
import javax.persistence.OneToOne;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="payment")
public class Payment extends BaseEntity{
	@Column(length=30)
	private String acctHolderName;
	@Column
	private double amount;
	@Column(length=20)
	private String paymentType;

	@OneToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	private CourierDetails courier;
	@OneToOne(cascade=CascadeType.ALL)
	private User user;
	private String paymentStatus;
	




	private LocalDateTime tx_time;
	private int otp;
	
	
public Payment() {
	
}

	public Payment(String acctHolderName,  String paymentType, double amount) {
		super();
		
		this.acctHolderName = acctHolderName;
		this.paymentType = paymentType;
		
		this.amount=amount;
	
	}
	



	public Payment(String acctHolderName,String paymentType, double amount, LocalDateTime tx_time, int otp,String paymentStatus ) {
		super();
		this.acctHolderName=acctHolderName;
		this.paymentType=paymentType;
		this.amount = amount;
		this.tx_time = tx_time;
		this.otp = otp;
		this.paymentStatus=paymentStatus;
	}



	public Payment(String acctHolderName, double amount, String paymentType, 
			CourierDetails courier, User user, LocalDateTime tx_time) {
		super();
		this.acctHolderName = acctHolderName;
		this.amount = amount;
		this.paymentType = paymentType;
		
		this.courier = courier;
		this.user = user;
		this.tx_time = tx_time;
	}






	public Payment(String acctHolderName, double amount, String paymentType,String paymentStatus, LocalDateTime tx_time, int otp) {
		super();
		this.acctHolderName = acctHolderName;
		this.amount = amount;
		this.paymentType = paymentType;
		this.paymentStatus = paymentStatus;
		this.tx_time = tx_time;
		this.otp = otp;
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



	public String getPaymentType() {
		return paymentType;
	}
	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}
	
	public CourierDetails getCourierId() {
		return courier;
	}
	public void setCourierId(CourierDetails courierId) {
		this.courier = courierId;
	}
	public User getUserId() {
		return user;
	}
	public void setUserId(User userId) {
		this.user = userId;
	}
	
	
	public String getAcctHolderName() {
		return acctHolderName;
	}

	public void setAcctHolderName(String acctHolderName) {
		this.acctHolderName = acctHolderName;
	}

	public CourierDetails getCourier() {
		return courier;
	}

	public void setCourier(CourierDetails courier) {
		this.courier = courier;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public  LocalDateTime getTx_time() {
		return tx_time;
	}

	public void setTx_time( LocalDateTime tx_time) {
		this.tx_time = tx_time;
	}
	
	



	public int getOtp() {
		return otp;
	}



	public void setOtp(int otp) {
		this.otp = otp;
	}



	@Override
	public String toString() {
		return String.format(
				"Payment [Id=%d,acctHolderName=%s, amount=%s, paymentType=%s,  user=%s, tx_time=%s]",
				getId(),acctHolderName, amount, paymentType,   user, tx_time);
	}

	


}
