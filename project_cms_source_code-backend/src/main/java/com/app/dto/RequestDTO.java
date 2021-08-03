package com.app.dto;

import java.util.Date;

import com.app.pojos.Address;
import com.app.pojos.AddressType;

public class RequestDTO {
  private int courierId;
	private double weight;
	private double length;
	private double breadth;

	private String status;
	private String pickupDateTime;

	private String deliveryType;
	

	private Address sourceAddress;

	private Address destinationAddress;

	private String senderfName;
	private String senderlName;
	private String receipientfName;
	private String receipientlName;
	

	private String branchName;
	

	private double price;
	
	


	public RequestDTO(int courierId, double weight, double length, double breadth, String status, String pickupDateTime,
			String deliveryType, Address sourceAddress, Address destinationAddress, String branchName, double price) {
		super();
		this.courierId = courierId;
		this.weight = weight;
		this.length = length;
		this.breadth = breadth;
		this.status = status;
		this.pickupDateTime = pickupDateTime;
		this.deliveryType = deliveryType;
		this.sourceAddress = sourceAddress;
		this.destinationAddress = destinationAddress;
		this.branchName = branchName;
		this.price = price;
	}
	
	

	public RequestDTO(int courierId, double weight, double length, double breadth, String status, String pickupDateTime,
			String deliveryType, Address sourceAddress, Address destinationAddress, String senderfName,
			String senderlName, String receipientfName, String receipientlName, String branchName, double price) {
		super();
		this.courierId = courierId;
		this.weight = weight;
		this.length = length;
		this.breadth = breadth;
		this.status = status;
		this.pickupDateTime = pickupDateTime;
		this.deliveryType = deliveryType;
		this.sourceAddress = sourceAddress;
		this.destinationAddress = destinationAddress;
		this.senderfName = senderfName;
		this.senderlName = senderlName;
		this.receipientfName = receipientfName;
		this.receipientlName = receipientlName;
		this.branchName = branchName;
		this.price = price;
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



	public String getReceipientfName() {
		return receipientfName;
	}



	public void setReceipientfName(String receipientfName) {
		this.receipientfName = receipientfName;
	}



	public String getReceipientlName() {
		return receipientlName;
	}



	public void setReceipientlName(String receipientlName) {
		this.receipientlName = receipientlName;
	}



	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
	


	public int getCourierId() {
		return courierId;
	}

	public void setCourierId(int courierId) {
		this.courierId = courierId;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}
	

	public String getBranchName() {
		return branchName;
	}

	public void setBranchName(String branchName) {
		this.branchName = branchName;
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

	@Override
	public String toString() {
		return String.format(
				"RequestDTO [weight=%s, length=%s, breadth=%s, status=%s, pickupDateTime=%s, deliveryType=%s, sourceAddress=%s, destinationAddress=%s, branchName=%s, price=%s]",
				weight, length, breadth, status, pickupDateTime, deliveryType, sourceAddress, destinationAddress,
				branchName, price);
	}



}
