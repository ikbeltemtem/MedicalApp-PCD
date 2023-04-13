package com.medical.project.Controller;

import com.medical.project.Entity.AuthenticationRequest;
import com.medical.project.Entity.AuthenticationResponse;
import com.medical.project.Entity.RegisterRequest;
import com.medical.project.Service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/api/v1/auth")
@EnableWebMvc
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/registerSec")
    public ResponseEntity<AuthenticationResponse> registerSec(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.registerSec(request));
    }

    @PostMapping("/registerMed")
    public ResponseEntity<AuthenticationResponse> registerMed(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.registerMed(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }


}