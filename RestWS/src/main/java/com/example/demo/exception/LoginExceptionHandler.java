package com.example.demo.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.example.demo.bean.EmployeeErrorResponse;

@ControllerAdvice
public class LoginExceptionHandler {
	@ExceptionHandler
	public ResponseEntity<EmployeeErrorResponse> handleException(InvalidCredentialsException exception) {
		EmployeeErrorResponse error = new EmployeeErrorResponse();
		
		//error.setStatus(HttpStatus.NOT_FOUND.value()); // 401
		error.setStatus(HttpStatus.UNAUTHORIZED.value());
		error.setMessage(exception.getMessage());
		error.setTimeStamp(LocalDateTime.now());
		
		return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
	}
}
