package com.sip.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sip.entities.Role;
import com.sip.repositories.RoleRepository;


@RestController
@RequestMapping("/role/")
public class RoleController {

	private final RoleRepository roleRepository;

	@Autowired
    public RoleController(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }
	



    @PostMapping("add")
    public String addRole(@RequestParam("role") String role) {

        //System.out.println(role);
        Role r = new Role(role);
        Role rSaved = roleRepository.save(r);
        //System.out.println("role = "+ rSaved);
        return role + " Added";
    }

}
