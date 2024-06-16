package com.HealthMonitoring.System.dao;

import com.HealthMonitoring.System.model.po.HealthData;
import java.util.List;

public interface HealthDataDao {
    // 查找特定用戶的所有健康數據
    List<HealthData> findAllByUserId(int userId);

    // 其他方法
    HealthData findById(int id);
    void save(HealthData healthData);
    void update(HealthData healthData);
    void deleteById(int id);
}
