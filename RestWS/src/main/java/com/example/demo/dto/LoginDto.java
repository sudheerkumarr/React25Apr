package com.example.demo.dto;

import lombok.Data;

@Data
public class LoginDto {

	private String email;
	private boolean isLogin;
	private String role;
}
