package com.spring.bankgroup.controller;

import com.spring.bankgroup.pojo.Account;
import com.spring.bankgroup.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/17
 * @ Description :
 * @ Version : 1.0
 */

@Controller
public class BankGroupController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/index2")
    public String index2(Model model) {
        model.addAttribute("msg", "Hello SpringMVC Annotation");
        return "index2";
    }


    @RequestMapping(value = "/index")
    public ModelAndView index() {
        ModelAndView modelAndView = new ModelAndView("template_main");
        modelAndView.addObject("name", "尹浩宇");
        modelAndView.addObject("account", new Account());
        return modelAndView;
    }

}
