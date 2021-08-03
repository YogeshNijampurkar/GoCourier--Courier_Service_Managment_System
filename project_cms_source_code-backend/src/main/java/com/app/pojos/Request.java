package com.app.pojos;

import java.time.LocalDateTime;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "request")
public class Request extends BaseEntity {
	@OneToOne(cascade = CascadeType.ALL)
	private CourierDetails courierId;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "branch_id")

	private BranchManager branchId;

	@Column(length = 50)
	private String Status;
	private LocalDateTime tx_time;

	@ManyToOne
	@JoinColumn(name = "courier_boy_id")
	private CourierBoy courierBoyId;

	public Request() {

	}

	public Request(CourierDetails courierId, BranchManager branchId, String status, LocalDateTime tx_time,
			CourierBoy courierBoyId) {
		super();
		this.courierId = courierId;
		this.branchId = branchId;
		Status = status;
		this.tx_time = tx_time;
		this.courierBoyId = courierBoyId;
	}
	

	public CourierDetails getCourierId() {
		return courierId;
	}

	public void setCourierId(CourierDetails courierId) {
		this.courierId = courierId;
	}

	public BranchManager getBranchId() {
		return branchId;
	}

	public void setBranchId(BranchManager branchId) {
		this.branchId = branchId;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	public LocalDateTime getTx_time() {
		return tx_time;
	}

	public void setTx_time(LocalDateTime tx_time) {
		this.tx_time = tx_time;
	}

	public CourierBoy getCourierBoyId() {
		return courierBoyId;
	}

	public void setCourierBoyId(CourierBoy courierBoyId) {
		this.courierBoyId = courierBoyId;
	}

	@Override
	public String toString() {
		return String.format("Request [courierId=%s, branchId=%s, Status=%s, tx_time=%s, courierBoyId=%s]", courierId,
				branchId, Status, tx_time, courierBoyId);
	}



}
