package com.HealthMonitoring.System.controller;

import com.HealthMonitoring.System.model.po.HealthData;
import com.HealthMonitoring.System.service.HealthDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/health-data")
public class HealthDataController {

    @Autowired
    private HealthDataService healthDataService;

    // 處理新增健康數據的請求
    @PostMapping("/add")
    public String handleAddHealthData(@ModelAttribute HealthData healthData, Model model) {
        healthDataService.saveHealthData(healthData);
        return "redirect:/"; // 新增成功後跳轉到主頁
    }

    // 處理更新健康數據的請求
    @PostMapping("/update")
    public String handleUpdateHealthData(@ModelAttribute HealthData healthData, Model model) {
        healthDataService.updateHealthData(healthData);
        return "redirect:/"; // 更新成功後跳轉到主頁
    }

    // 處理刪除健康數據的請求
    @PostMapping("/delete")
    public String handleDeleteHealthData(@RequestParam("id") int id, Model model) {
        healthDataService.deleteHealthDataById(id);
        return "redirect:/"; // 刪除成功後跳轉到主頁
    }
}
