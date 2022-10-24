package com.spring.bankgroup.pojo;

import lombok.Data;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/17
 * @ Description :
 * @ Version : 1.0
 */

@Data
public class Deposit {
    Integer cardID;
    Integer ownerID;
    Double deposit;
    String createDate;
    String expireDate;
    Integer cardType;
    Double lineOfCredit;
}
