package com.spring.bankgroup.pojo;

import lombok.Data;

import java.sql.Date;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/17
 * @ Description :
 * @ Version : 1.0
 */

@Data
public class TimeDeposit {
    Integer timeDepositID;
    Integer ownerID;
    Double deposit;
    Date registryDate;
    Date startDate;
    Date expireDate;
    Double interestRate;
    Double interest;
}
