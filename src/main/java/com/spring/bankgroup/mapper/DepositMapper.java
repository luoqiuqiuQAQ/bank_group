package com.spring.bankgroup.mapper;

import com.spring.bankgroup.pojo.Deposit;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/17
 * @ Description :
 * @ Version : 1.0
 */

@Mapper
public interface DepositMapper {
    void deleteDepositCard(Integer ownerID);

    List<Deposit> getAllDeposit();

    void createDepositCard(Deposit deposit);

    List<Deposit> getDepositCardByOwnerID(Integer ownerID);

    Deposit getDepositCardByCardID(Integer cardID);

    void updateDeposit(Deposit deposit);

    void closeDeposit(Deposit deposit);

}
