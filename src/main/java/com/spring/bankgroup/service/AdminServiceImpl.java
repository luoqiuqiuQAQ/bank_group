package com.spring.bankgroup.service;

import com.spring.bankgroup.dao.AdminOperationDao;
import com.spring.bankgroup.dao.BankOperationDao;
import com.spring.bankgroup.dao.UserOperationDao;
import com.spring.bankgroup.pojo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/20
 * @ Description :
 * @ Version : 1.0
 */

@Service("AdminService")
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminOperationDao adminOperationDao;
    @Autowired
    private BankOperationDao bankOperationDao;
    @Autowired
    private UserOperationDao userOperationDao;

    @Override
    public Account adminLogin(String account, String password) {
        return userOperationDao.getAccount(account, password);
    }

    @Override
    public List<Account> getAccountList() {
        return adminOperationDao.getAccountList();
    }

    @Override
    public List<User> getUserList() {
        return adminOperationDao.getUserList();
    }

    @Override
    public List<Sheet> getSheetList() {
        return adminOperationDao.getSheetList();
    }

    @Override
    public List<Deposit> getDepositList() {
        return adminOperationDao.getDepositList();
    }

    @Override
    public List<TimeDeposit> getTimeDepositList() {
        return adminOperationDao.getTimeDepositList();
    }

    @Override
    public List<Financial> getFinancialList() {
        return adminOperationDao.getFinancialList();
    }

    @Override
    public void deleteAccount(Integer id) {
        adminOperationDao.deleteAccount(id);
    }

    @Override
    public void deleteUser(Integer id) {
        adminOperationDao.deleteUser(id);
    }

    @Override
    public void deleteDepositCard(Integer ownerID) {
        adminOperationDao.deleteDepositCard(ownerID);
    }

    @Override
    public void deleteTimeDepositCard(Integer ownerID) {
        adminOperationDao.deleteTimeDepositCard(ownerID);
    }

    @Override
    public void deleteFinancial(Integer ownerID) {
        adminOperationDao.deleteFinancial(ownerID);
    }
}
