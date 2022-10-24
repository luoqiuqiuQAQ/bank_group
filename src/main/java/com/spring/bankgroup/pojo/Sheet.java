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
public class Sheet {
    Integer sheetID;
    Integer ownerID;
    Integer clerkID;
    Double money;
    Date operationDate;
    Integer operationType;
}
