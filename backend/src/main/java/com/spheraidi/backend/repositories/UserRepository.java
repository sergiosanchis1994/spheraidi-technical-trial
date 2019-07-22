package com.spheraidi.backend.repositories;

import com.spheraidi.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<User, String> {

    User findByUsername(@Param("username") String username);

    User findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
}
