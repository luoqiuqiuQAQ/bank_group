package com.spring.bankgroup.service;

import com.spring.bankgroup.pojo.*;

import java.util.List;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/17
 * @ Description :
 * @ Version : 1.0
 */
public interface UserService {
    Account register(String username, String password);

    Account login(String username, String password);

    Account editAccount(Account account);

    User getUserInfo(Integer ID);

    User editUserInfo(User user);

    void createDepositCard(Deposit deposit);

    List<Deposit> getDepositCardByOwnerID(Integer ownerID);

    Deposit getDepositCardByCardID(Integer cardID);

    void updateDeposit(Deposit deposit, Sheet sheet);

    void closeDeposit(Deposit deposit);

    void createTimeDeposit(TimeDeposit timeDeposit, Sheet sheet);

    List<TimeDeposit> getTimeDepositByOwnerID(Integer ownerID);

    void withdrawTimeDeposit(Integer timeDepositID);

    void createFinancial(Financial financial, Sheet sheet);

    List<Financial> getFinancialByOwnerID(Integer ownerID);

    Financial getFinancial(Integer financialID);

    void withdrawFinancial(Integer financialID);

}
