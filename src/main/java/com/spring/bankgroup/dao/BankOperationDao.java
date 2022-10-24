package com.spring.bankgroup.dao;

import com.spring.bankgroup.pojo.Deposit;
import com.spring.bankgroup.pojo.Financial;
import com.spring.bankgroup.pojo.Sheet;
import com.spring.bankgroup.pojo.TimeDeposit;

import java.util.List;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/17
 * @ Description :
 * @ Version : 1.0
 */


public interface BankOperationDao {
    void createDepositCard(Deposit deposit);

    List<Deposit> getDepositCardByOwnerID(Integer ownerID);

    Deposit getDepositCardByCardID(Integer cardID);

    void updateDeposit(Deposit deposit);

    void closeDeposit(Deposit deposit);

    void createTimeDeposit(TimeDeposit timeDeposit);

    List<TimeDeposit> getTimeDepositByOwnerID(Integer ownerID);

    void withdrawTimeDeposit(Integer timeDepositID);

    void createFinancial(Financial financial);

    List<Financial> getFinancialByOwnerID(Integer ownerID);

    Financial getFinancial(Integer financialID);

    void withdrawFinancial(Integer financialID);

    void insertSheet(Sheet sheet);

    List<Sheet> getSheetList(Integer userID);
}
