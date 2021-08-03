package com.app.service;

import java.util.List;

import com.app.dto.RequestDTO;
import com.app.dto.StatusOFCourierRequest;

public interface IRequestService {
	
	String assignCourierBoy(StatusOFCourierRequest request);
	List<RequestDTO> viewRequest(int id);

}
