package com.sip.controllers;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import javax.validation.Valid;

import com.sip.entities.Role;
import com.sip.entities.User;
import com.sip.repositories.RoleRepository;
import com.sip.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "*")
public class RegistrationController {
	@Autowired
	private UserService userService;

	@Autowired
	private RoleRepository roleRepository;

	@RequestMapping(value = "/registration", method = RequestMethod.POST)
	public User createNewUser(@RequestBody User user) {



	    Role userRole = roleRepository.findByRole(user.getTemp()); 
		user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));

		

		userService.saveUser(user);

		return user;
	}


}
