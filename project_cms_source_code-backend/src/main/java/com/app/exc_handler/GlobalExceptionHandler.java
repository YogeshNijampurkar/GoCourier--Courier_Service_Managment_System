package com.app.exc_handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


import com.app.dto.ErrorResponse;

@ControllerAdvice 
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	//catch all -- equivalent
	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorResponse> handleException(Exception e) {
		System.out.println("in handle any exc");
		return new ResponseEntity<>(new ErrorResponse("Servr side error !!!!",e.getMessage()),
				 HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
