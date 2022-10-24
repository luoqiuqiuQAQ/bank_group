package com.spring.bankgroup;

import com.spring.bankgroup.service.AdminService;
import com.spring.bankgroup.service.UserService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = BankGroupApplication.class)
public class BankGroupApplicationTests {

    @Autowired
    private UserService userService;
    @Autowired
    private AdminService adminService;

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    @Test
    public void loginTest(){
        System.out.println(userService.login("admin","admin"));
    }

}
