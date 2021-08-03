package com.app.pojos;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "courier_details")
public class CourierDetails extends BaseEntity {

	private double weight;
	private double length;
	private double breadth;
	private double price;
	@Column(length = 30)
	private String recipientfName;
	@Column(length = 30)
	private String recipientlName;
	@Column(length = 30)
	private String senderfName;
	@Column(length = 30)
	private String senderlName;
	@Column(length = 30)
	private String status;
	private String pickupDateTime;
	@Enumerated(EnumType.STRING)
	private DeliveryType deliveryType;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	@JsonIgnoreProperties("courier")
	@JsonIgnore
	private User user;
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Address sourceAddress;
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Address destinationAddress;

	private LocalDateTime tx_time;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "branch_id")
	@JsonIgnoreProperties("branch")
	@JsonIgnore
	private BranchManager branch;

	public CourierDetails() {

	}

	public CourierDetails(double weight, double length, double breadth, double price, String recipientfName,
			String recipientlName, String senderfName, String senderlName, String status, String pickupDateTime,
			DeliveryType deliveryType, User user, Address sourceAddress, Address destinationAddress,
			LocalDateTime tx_time, BranchManager branch) {
		super();
		this.weight = weight;
		this.length = length;
		this.breadth = breadth;
		this.price = price;
		this.recipientfName = recipientfName;
		this.recipientlName = recipientlName;
		this.senderfName = senderfName;
		this.senderlName = senderlName;
		this.status = status;
		this.pickupDateTime = pickupDateTime;
		this.deliveryType = deliveryType;
		this.user = user;
		this.sourceAddress = sourceAddress;
		this.destinationAddress = destinationAddress;
		this.tx_time = tx_time;
		this.branch = branch;
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

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public double getLength() {
		return length;
	}

	public BranchManager getBranch() {
		return branch;
	}

	public void setBranch(BranchManager branch) {
		this.branch = branch;
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

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public DeliveryType getDeliveryType() {
		return deliveryType;
	}

	public void setDeliveryType(DeliveryType deliveryType) {
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
		sourceAddress = new Address(branch.getPincode(), branch.getArea(), branch.getHouseno(), branch.getCity(),
				branch.getDistrict(), branch.getCountry(), branch.getCity(), AddressType.SOURCE_ADDRESS);
	}

	public void addDestinationAddress(Address branch) {
		destinationAddress = new Address(branch.getPincode(), branch.getArea(), branch.getHouseno(), branch.getCity(),
				branch.getDistrict(), branch.getCity(), branch.getCountry(), AddressType.DESTINATION_ADDRESS);
	}

	public LocalDateTime getTx_time() {
		return tx_time;
	}

	public void setTx_time(LocalDateTime tx_time) {
		this.tx_time = tx_time;
	}

	@Override
	public String toString() {
		return String.format(
				"CourierDetails [weight=%s, length=%s, breadth=%s, price=%s, recipientfName=%s, recipientlName=%s, senderfName=%s, senderlName=%s, status=%s, pickupDateTime=%s, deliveryType=%s,  sourceAddress=%s, destinationAddress=%s, tx_time=%s, branch=%s]",
				weight, length, breadth, price, recipientfName, recipientlName, senderfName, senderlName, status,
				pickupDateTime, deliveryType,  sourceAddress, destinationAddress, tx_time, branch);
	}


}
