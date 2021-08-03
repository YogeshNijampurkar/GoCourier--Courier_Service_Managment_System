package com.app.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BranchManagerRepository;
import com.app.dao.CourierBoyRepository;
import com.app.dao.CourierRepository;
import com.app.dao.RequestRepository;
import com.app.dto.RequestDTO;
import com.app.dto.StatusOFCourierRequest;
import com.app.pojos.CourierBoy;
import com.app.pojos.CourierDetails;
import com.app.pojos.Request;

@Transactional
@Service
public class RequestService implements IRequestService {

	@Autowired
	private CourierRepository courierRepo;

	@Autowired
	private CourierBoyRepository courierBoyRepo;
	@Autowired
	private BranchManagerRepository branchManagerRepo;

	@Autowired
	private RequestRepository requestRepo;

	@Override
	public String assignCourierBoy(StatusOFCourierRequest request) {

		CourierBoy courierBoyId = courierBoyRepo.findByEmail(request.getEmail());

		Request r = new Request(courierRepo.findById(request.getId()).get(),
				branchManagerRepo.findById(request.getBranchId()).get(), "Requested", LocalDateTime.now(),
				courierBoyRepo.findByEmail(request.getEmail()));

		System.out.println(r);

		requestRepo.save(r);

		return null;
	}

	@Override
	public List<RequestDTO> viewRequest(int id) {
		List<RequestDTO> list = new ArrayList<>();

		for (Request r : courierBoyRepo.findById(id).get().getRequestList()) {
			list.add(new RequestDTO(r.getCourierId().getId(),r.getCourierId().getWeight(), r.getCourierId().getLength(),
					r.getCourierId().getBreadth(), r.getStatus(), r.getCourierId().getPickupDateTime(),
					r.getCourierId().getDeliveryType().name(), r.getCourierId().getSourceAddress(),
					r.getCourierId().getDestinationAddress(), r.getCourierId().getSenderfName(),r.getCourierId().getSenderlName(),r.getCourierId().getRecipientfName(),r.getCourierId().getRecipientlName(),r.getBranchId().getBranchName(),
					r.getCourierId().getPrice()));
			
		}
		return list;

	}
}
