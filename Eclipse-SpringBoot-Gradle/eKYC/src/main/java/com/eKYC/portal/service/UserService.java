package com.eKYC.portal.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eKYC.portal.exception.EkycNotFoundException;
import com.eKYC.portal.model.user;
import com.eKYC.portal.repo.UserRepo;


@Service
public class UserService {

	@Autowired
	UserRepo userRepo;
	
	public user createUser(user User) {
		User.setEkycCode(UUID.randomUUID().toString());
		return userRepo.save(User);
	}
	
	public List<user> findAllUsers() {
		return userRepo.findAll();
	}
	
	public user updateUser(user User) {
		return userRepo.save(User);
	}
	
	public user findUserById(long id) {
		return userRepo.findUserById(id).orElseThrow(() -> new EkycNotFoundException("User by id " + id + " was not found"));
	}
	
	public void deleteUser(Long id) {
		userRepo.deleteUserById(id);
	}
	
	
	
}
