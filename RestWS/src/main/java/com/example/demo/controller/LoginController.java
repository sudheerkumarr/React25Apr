package com.example.demo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.bean.Login;
import com.example.demo.dto.LoginDto;
import com.example.demo.exception.InvalidCredentialsException;
import com.example.demo.service.ILoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
	
	@Autowired
	ILoginService loginServ;

	@PostMapping("/login")
	ResponseEntity<LoginDto> login(@Valid @RequestBody Login login) throws InvalidCredentialsException {
		LoginDto log = loginServ.login(login);
		return new ResponseEntity<>(log, HttpStatus.OK);
	}

	@PatchMapping("/logout/{email}")
	ResponseEntity<LoginDto> logout(@PathVariable("email") String email) {
		LoginDto login = loginServ.logout(email);
		return new ResponseEntity<>(login, HttpStatus.OK);
	}
	
}
