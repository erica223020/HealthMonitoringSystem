package com.HealthMonitoring.System.service;

import com.HealthMonitoring.System.dao.UserDao;
import com.HealthMonitoring.System.dao.HealthDataDao;
import com.HealthMonitoring.System.model.dto.UserHealthDataDto;
import com.HealthMonitoring.System.model.po.HealthData;
import com.HealthMonitoring.System.model.po.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    private final UserDao userDao;
    private final HealthDataDao healthDataDao;

    @Autowired
    public UserService(UserDao userDao, HealthDataDao healthDataDao) {
        this.userDao = userDao;
        this.healthDataDao = healthDataDao;
    }

    public UserHealthDataDto getUserWithHealthData(int userId) {
        User user = userDao.findById(userId);
        List<HealthData> healthDataList = healthDataDao.findAllByUserId(userId);
        return new UserHealthDataDto(user, healthDataList);  // 使用 UserHealthDataDto 的構造函數
    }
}
