package com.spheraidi.backend.services;

import com.spheraidi.backend.models.User;
import com.spheraidi.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(String username, String password, String sessionId){
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setSessionId(sessionId);
        user.setActive(true);
        return userRepository.save(user);
    }

    public User login(String username, String password, String sessionId){
        User user = userRepository.findByUsernameAndPassword(username, password);
        if(Objects.nonNull(user)){
            user.setSessionId(sessionId);
            user.setActive(true);
            userRepository.save(user);
        }
        return user;
    }

    public void logout(String username){
        User user = userRepository.findByUsername(username);
        user.setActive(false);
        user.setSessionId(null);
        userRepository.save(user);
    }
}
