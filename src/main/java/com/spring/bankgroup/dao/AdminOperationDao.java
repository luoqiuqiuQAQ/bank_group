package com.spring.bankgroup.dao;

import com.spring.bankgroup.pojo.*;

import java.util.List;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/17
 * @ Description :
 * @ Version : 1.0
 */

public interface AdminOperationDao {
    List<Account> getAccountList();

    List<User> getUserList();

    List<Sheet> getSheetList();

    List<Deposit> getDepositList();

    List<TimeDeposit> getTimeDepositList();

    List<Financial> getFinancialList();

    void deleteAccount(Integer id);

    void deleteUser(Integer id);

    void deleteDepositCard(Integer ownerID);

    void deleteTimeDepositCard(Integer ownerID);

    void deleteFinancial(Integer ownerID);
}
