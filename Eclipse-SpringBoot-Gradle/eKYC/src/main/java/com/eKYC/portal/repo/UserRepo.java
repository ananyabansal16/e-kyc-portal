package com.eKYC.portal.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eKYC.portal.model.user;


public interface UserRepo extends JpaRepository<user, Long>{
	void deleteUserById(Long ekycid);
	Optional<user> findUserById(long ekycid);
}
