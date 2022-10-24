package com.spring.bankgroup.dao;

import com.spring.bankgroup.mapper.*;
import com.spring.bankgroup.pojo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/20
 * @ Description :
 * @ Version : 1.0
 */
@Repository("AdminOperationDao")
public class AdminOperationDaoImpl implements AdminOperationDao {
    @Autowired
    private AccountMapper accountMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private DepositMapper depositMapper;
    @Autowired
    private TimeDepositMapper timeDepositMapper;
    @Autowired
    private SheetMapper sheetMapper;
    @Autowired
    private FinancialMapper financialMapper;

    @Override
    public List<Account> getAccountList() {
        return accountMapper.getAllAccount();
    }

    @Override
    public List<User> getUserList() {
        return userMapper.getAllUser();
    }

    @Override
    public List<Sheet> getSheetList() {
        return sheetMapper.getAllSheet();
    }

    @Override
    public List<Deposit> getDepositList() {
        return depositMapper.getAllDeposit();
    }

    @Override
    public List<TimeDeposit> getTimeDepositList() {
        return timeDepositMapper.getAllTimeDeposit();
    }

    @Override
    public List<Financial> getFinancialList() {
        return financialMapper.getAllFinancial();
    }

    @Override
    public void deleteAccount(Integer id) {
        accountMapper.deleteAccount(id);
    }

    @Override
    public void deleteUser(Integer id) {
        userMapper.deleteUser(id);
    }

    @Override
    public void deleteDepositCard(Integer ownerID) {
        depositMapper.deleteDepositCard(ownerID);
    }

    @Override
    public void deleteTimeDepositCard(Integer ownerID) {
        timeDepositMapper.deleteTimeDepositCard(ownerID);
    }

    @Override
    public void deleteFinancial(Integer ownerID) {
        financialMapper.deleteFinancial(ownerID);
    }
}
