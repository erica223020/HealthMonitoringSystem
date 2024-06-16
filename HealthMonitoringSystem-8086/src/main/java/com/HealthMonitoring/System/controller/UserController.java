package com.HealthMonitoring.System.controller;

import com.HealthMonitoring.System.model.dto.UserHealthDataDto;
import com.HealthMonitoring.System.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    // 新的方法來返回用戶及其健康數據
    @GetMapping("/{id}/health-data")
    @ResponseBody
    public UserHealthDataDto getUserWithHealthData(@PathVariable int id) {
        return userService.getUserWithHealthData(id);
    }
}
