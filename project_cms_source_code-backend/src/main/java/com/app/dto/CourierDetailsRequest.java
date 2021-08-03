package com.app.dto;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Temporal;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.pojos.Address;
import com.app.pojos.AddressType;
import com.app.pojos.DeliveryType;
import com.app.pojos.User;

public class CourierDetailsRequest {

	private double weight;
	private double length;
	private double breadth;

	private String status;

	private String pickupDateTime;

	private String deliveryType;

	private User user;

	private Address sourceAddress;

	private Address destinationAddress;

	private Date tx_time;

	private int branchId;

	private double price;
	private String recipientfName;
	private String recipientlName;

	private String senderfName;
	private String senderlName;

	public CourierDetailsRequest(double weight, double length, double breadth, String status, String pickupDateTime,
			String deliveryType, User user, Address sourceAddress, Address destinationAddress, Date tx_time,
			int branchId, double price, String recipientfName, String recipientlName, String senderfName,
			String senderlName) {
		super();
		this.weight = weight;
		this.length = length;
		this.breadth = breadth;
		this.status = status;
		this.pickupDateTime = pickupDateTime;
		this.deliveryType = deliveryType;
		this.user = user;
		this.sourceAddress = sourceAddress;
		this.destinationAddress = destinationAddress;
		this.tx_time = tx_time;
		this.branchId = branchId;
		this.price = price;
		this.recipientfName = recipientfName;
		this.recipientlName = recipientlName;
		this.senderfName = senderfName;
		this.senderlName = senderlName;
	}

	public String getSenderfName() {
		return senderfName;
	}

	public void setSenderfName(String senderfName) {
		this.senderfName = senderfName;
	}

	public String getSenderlName() {
		return senderlName;
	}

	public void setSenderlName(String senderlName) {
		this.senderlName = senderlName;
	}

	public double getPrice() {
		return price;
	}

	public String getRecipientfName() {
		return recipientfName;
	}

	public void setRecipientfName(String recipientfName) {
		this.recipientfName = recipientfName;
	}

	public String getRecipientlName() {
		return recipientlName;
	}

	public void setRecipientlName(String recipientlName) {
		this.recipientlName = recipientlName;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getBranchId() {
		return branchId;
	}

	public void setBranchId(int branchId) {
		this.branchId = branchId;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		this.length = length;
	}

	public double getBreadth() {
		return breadth;
	}

	public void setBreadth(double breadth) {
		this.breadth = breadth;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPickupDateTime() {
		return pickupDateTime;
	}

	public void setPickupDateTime(String pickupDateTime) {
		this.pickupDateTime = pickupDateTime;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getDeliveryType() {
		return deliveryType;
	}

	public void setDeliveryType(String deliveryType) {
		this.deliveryType = deliveryType;
	}

	public Address getSourceAddress() {
		return sourceAddress;
	}

	public void setSourceAddress(Address sourceAddress) {
		this.sourceAddress = sourceAddress;
	}

	public Address getDestinationAddress() {
		return destinationAddress;
	}

	public void setDestinationAddress(Address destinationAddress) {
		this.destinationAddress = destinationAddress;
	}

	public void addSourceAddress(Address branch) {
		sourceAddress = new Address(branch.getPincode(), branch.getArea(), branch.getHouseno(), branch.getTaluka(),
				branch.getDistrict(), branch.getCity(), branch.getCountry(), AddressType.SOURCE_ADDRESS);
	}

	public void addDestinationAddress(Address branch) {
		destinationAddress = new Address(branch.getPincode(), branch.getArea(), branch.getHouseno(), branch.getTaluka(),
				branch.getDistrict(), branch.getCity(), branch.getCountry(), AddressType.DESTINATION_ADDRESS);
	}

	public Date getTx_time() {
		return tx_time;
	}

	public void setTx_time(Date tx_time) {
		this.tx_time = tx_time;
	}

	@Override
	public String toString() {
		return String.format("CourierDetails [weight=%s, length=%s, breadth=%s, status=%s, pickupDateTime=%s, user=%s]",
				weight, length, breadth, status, pickupDateTime, user);
	}

}
