package com.medical.project.Service;

import com.medical.project.Dao.TokenRepository;
import com.medical.project.Dao.UserRepository;
import com.medical.project.Entity.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .age(request.getAge())
                .adresse(request.getAdresse())
                .tel(request.getTel())
                .email(request.getEmail())
                .speciality(request.getSpeciality())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.PATIENT)
                .build();
        var savedUser = repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        saveUserToken(savedUser, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)

                .build();
    }

    public AuthenticationResponse registerMed(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .age(request.getAge())
                .adresse(request.getAdresse())
                .tel(request.getTel())
                .email(request.getEmail())
                .speciality(request.getSpeciality())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.MEDS)
                .build();
        var savedUser = repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        saveUserToken(savedUser, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)

                .build();
    }

    public AuthenticationResponse registerSec(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .age(request.getAge())
                .adresse(request.getAdresse())
                .tel(request.getTel())
                .email(request.getEmail())
                .speciality(request.getSpeciality())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.SEC)
                .build();
        var savedUser = repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        saveUserToken(savedUser, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)

                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var role=user.getRole();
        var jwtToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .role(role)
                .build();
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    public AuthenticationResponse UpdateSec(UpdateRequest request,String email) {
        var user = repository.findByEmail(email)
                .orElseThrow();
        user.setFirstname(user.getFirstname());
        user.setLastname(user.getLastname());
        user.setAdresse(request.getAdresse());
        user.setAge(request.getAge());
        user.setTel(request.getTel());
        user.setEmail(request.getEmail());
        user.setSpeciality(user.getSpeciality());
        user.setRole(Role.SEC);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        var savedUser = repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        saveUserToken(savedUser, jwtToken);

        return AuthenticationResponse.builder()
                .token(jwtToken)

                .build();
    }

    public AuthenticationResponse UpdateMEDS(UpdateRequest request,String email) {
        var user = repository.findByEmail(email)
                .orElseThrow();
        user.setFirstname(user.getFirstname());
        user.setLastname(user.getLastname());
        user.setAdresse(request.getAdresse());
        user.setAge(request.getAge());
        user.setTel(request.getTel());
        user.setEmail(request.getEmail());
        user.setSpeciality(user.getSpeciality());
        if(email == "admin@gmail.com"){
            user.setRole(Role.ADMIN);
        }else{
        user.setRole(Role.MEDS);}
        user.setPassword(passwordEncoder.encode("malek1234"));

        var savedUser = repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        saveUserToken(savedUser, jwtToken);

        return AuthenticationResponse.builder()
                .token(jwtToken)

                .build();
    }


}