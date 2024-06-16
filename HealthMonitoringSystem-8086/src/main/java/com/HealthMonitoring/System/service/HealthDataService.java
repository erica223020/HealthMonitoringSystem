package com.HealthMonitoring.System.service;

import com.HealthMonitoring.System.dao.HealthDataDao;
import com.HealthMonitoring.System.model.po.HealthData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HealthDataService {

    @Autowired
    private HealthDataDao healthDataDao;

    public List<HealthData> findAllHealthDataByUserId(int userId) {
        return healthDataDao.findAllByUserId(userId);
    }

    public void saveHealthData(HealthData healthData) {
        healthDataDao.save(healthData);
    }

    public void updateHealthData(HealthData healthData) {
        healthDataDao.update(healthData);
    }

    public void deleteHealthDataById(int id) {
        healthDataDao.deleteById(id);
    }
}
