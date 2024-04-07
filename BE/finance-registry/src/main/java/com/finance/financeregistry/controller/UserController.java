package com.finance.financeregistry.controller;

import com.finance.financeregistry.dto.JwtAuthRequest;
import com.finance.financeregistry.dto.JwtAuthResponse;
import com.finance.financeregistry.dto.UserRegistration;
import com.finance.financeregistry.dto.UserResponse;
import com.finance.financeregistry.entity.User;
import com.finance.financeregistry.service.MyUserDetailsService;
import com.finance.financeregistry.service.UserService;
import com.finance.financeregistry.util.JwtUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    UserService userService;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/registration")
    public ResponseEntity<User> userRegistration(@RequestBody UserRegistration user) {
        return ResponseEntity.ok(userService.saveCustomer(modelMapper.map(user, User.class)));
    }

    @PostMapping("/login")
    public ResponseEntity<Object> generateToken(@RequestBody JwtAuthRequest jwtAuthRequest) throws AuthenticationException {
        try{
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    jwtAuthRequest.getUsername(),
                    jwtAuthRequest.getPassword()));
        } catch(UsernameNotFoundException | BadCredentialsException e) {
            return ResponseEntity.badRequest().body("Bad Credentials");
        }

        var userDetails = this.userDetailsService.loadUserByUsername(jwtAuthRequest.getUsername());

        var user = userService.getUserByEmail(jwtAuthRequest.getUsername());
        if(user.isPresent()) {
            String token = jwtUtils.generateToken(userDetails, user.get());
            return ResponseEntity.ok(new JwtAuthResponse(token, user.get()));
        }
        return ResponseEntity.status(402).body("user is null");
    }

    @GetMapping("/authenticate/user")
    public ResponseEntity<UserResponse> getUserById() throws AuthenticationException {
        return ResponseEntity.status(200).body(userService.getUserById());
    }
}
