package com.spheraidi.backend.controllers;

import com.spheraidi.backend.models.User;
import com.spheraidi.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/users/login")
    @ResponseBody
    public User login(@RequestParam(name = "username") String username,
                      @RequestParam(name = "password") String password,
                      @RequestParam(name = "sessionId") String sessionId) {
        return userService.login(username, password, sessionId);
    }

    @PostMapping(value = "/users/create")
    @ResponseBody
    public User createUser(@RequestBody User user) {
        return userService.createUser(user.getUsername(), user.getPassword(), user.getSessionId());
    }
}
