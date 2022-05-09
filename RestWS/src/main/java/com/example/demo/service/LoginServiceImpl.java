package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.bean.Login;
import com.example.demo.dto.LoginDto;
import com.example.demo.exception.InvalidCredentialsException;
import com.example.demo.repository.ILoginRepository;

@Service
public class LoginServiceImpl implements ILoginService {

	@Autowired
	ILoginRepository loginRepo;
	
	@Override
	public LoginDto login(Login login) throws InvalidCredentialsException {
		// Get db account details
		Optional<Login> opt= loginRepo.findById(login.getEmail());
		
		if(!opt.isPresent()) {
			throw new InvalidCredentialsException("Invalid Credentials");
		}
		Login dbLogin = opt.get();
		LoginDto loginDto = new LoginDto();
		
		// compare login and dbLogin details
		if(login.getEmail().equals(dbLogin.getEmail()) && login.getPassword().equals(dbLogin.getPassword())) {
			// Update isLogin flag to true
			dbLogin.setLogin(true);
			loginRepo.save(dbLogin);
			// return updated login object
			loginDto.setEmail(dbLogin.getEmail());
			loginDto.setRole(dbLogin.getRole());
			loginDto.setLogin(dbLogin.isLogin());
			return loginDto;
		} else {
			throw new InvalidCredentialsException("Invalid credentials");
		}
	}

	@Override
	public LoginDto logout(String email) {
		Login login = loginRepo.getById(email);
		login.setLogin(false);
		loginRepo.save(login);
		return new LoginDto();
	}

	@Override
	public void resetPassword(String email) {
		
		
	}

	@Override
	public Login forgotPassword(String email) {
		
		return null;
	}
	


}
