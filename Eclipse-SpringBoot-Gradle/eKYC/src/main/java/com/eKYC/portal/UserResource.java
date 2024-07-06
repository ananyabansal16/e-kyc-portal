package com.eKYC.portal;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.eKYC.portal.model.user;
import com.eKYC.portal.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*") 
public class UserResource {
	
	
	@Autowired
	UserService userService ;
	
	@GetMapping("/all")
	public ResponseEntity<List<user>> getAllUsers(){
		List<user> Users = userService.findAllUsers();
		return new ResponseEntity<>(Users, HttpStatus.OK);
	}
	
	
	@GetMapping("/search/{id}")
	public ResponseEntity<user> getUserById(@PathVariable("id")Long id){
		user User = userService.findUserById(id);
		return new ResponseEntity<>(User, HttpStatus.OK);
	}
	
	@PostMapping("/create")
	public ResponseEntity<user> createEKyc(@RequestBody user User) {
		user newUser = userService.createUser(User);
		return new ResponseEntity<>(newUser, HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public ResponseEntity<user> updateEKyc(@RequestBody user User) {
		user updateUser = userService.updateUser(User);
		return new ResponseEntity<>(updateUser, HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteEKyc(@PathVariable("id")Long id) {
		userService.deleteUser(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
