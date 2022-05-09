package com.example.demo.service;

import com.example.demo.bean.Login;
import com.example.demo.dto.LoginDto;
import com.example.demo.exception.InvalidCredentialsException;

public interface ILoginService {
	LoginDto login(Login login) throws InvalidCredentialsException;
	LoginDto logout(String email);
	void resetPassword(String email);
	Login forgotPassword(String email);
}
