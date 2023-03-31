package com.medical.project.Controller;


import com.medical.project.Dao.UserRepository;
import com.medical.project.Entity.Therapie;
import com.medical.project.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "*")
@RequestMapping("/api/user")
@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;


    @GetMapping("/getAll")

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
}
