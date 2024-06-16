package com.HealthMonitoring.System.dao;

import com.HealthMonitoring.System.model.po.User;
import java.util.List;

public interface UserDao {
    User findById(int id);
    List<User> findAll();
    User findByEmail(String email);
    void save(User user);
    void update(User user);
    void deleteById(int id);
}
