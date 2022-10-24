package com.spring.bankgroup.mapper;

import com.spring.bankgroup.pojo.TimeDeposit;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/17
 * @ Description :
 * @ Version : 1.0
 */

@Mapper
public interface TimeDepositMapper {
    void deleteTimeDepositCard(Integer ownerID);

    List<TimeDeposit> getAllTimeDeposit();

    void createTimeDeposit(TimeDeposit timeDeposit);

    List<TimeDeposit> getTimeDepositByOwnerID(Integer ownerID);

    void withdrawTimeDeposit(Integer timeDepositID);

}
