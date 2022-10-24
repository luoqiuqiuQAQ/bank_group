package com.spring.bankgroup.controller;

import com.spring.bankgroup.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/20
 * @ Description :
 * @ Version : 1.0
 */

@Controller
public class AdminController {

    @Autowired
    AdminService adminService;
}
