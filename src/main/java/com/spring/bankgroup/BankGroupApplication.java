package com.spring.bankgroup;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

@MapperScan("com.spring.bankgroup.mapper")
public class BankGroupApplication {

    public static void main(String[] args) {
        SpringApplication.run(BankGroupApplication.class, args);
    }

}
