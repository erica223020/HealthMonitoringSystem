package com.HealthMonitoring.System.model.dto;

import com.HealthMonitoring.System.model.po.HealthData;
import com.HealthMonitoring.System.model.po.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

// 使用 Lombok 自動生成所需的方法
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserHealthDataDto {
    private User user;
    private List<HealthData> healthDataList;

    // 手動定義所需的構造函數
    public UserHealthDataDto(User user, List<HealthData> healthDataList) {
        this.user = user;
        this.healthDataList = healthDataList;
    }
}
