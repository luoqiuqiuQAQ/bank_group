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

@Service("UserService")
public class UserServiceImpl implements UserService {

    @Autowired
    private AdminOperationDao adminOperationDao;
    @Autowired
    private BankOperationDao bankOperationDao;
    @Autowired
    private UserOperationDao userOperationDao;

    @Override
    public Account register(String username, String password) {
        userOperationDao.createAccount(username, password);
        Account account = userOperationDao.getAccount(username, password);
        userOperationDao.createUser(account);
        return account;
    }

    @Override
    public Account login(String username, String password) {
        return userOperationDao.getAccount(username, password);
    }

    @Override
    public Account editAccount(Account account) {
        userOperationDao.editAccount(account);
        return userOperationDao.getAccount(account.getID());
    }

    @Override
    public User getUserInfo(Integer ID) {
        return userOperationDao.getUserInfo(ID);
    }

    @Override
    public User editUserInfo(User user) {
        userOperationDao.editUserInfo(user);
        return userOperationDao.getUserInfo(user.getID());
    }

    @Override
    public void createDepositCard(Deposit deposit) {
        bankOperationDao.createDepositCard(deposit);
    }

    @Override
    public List<Deposit> getDepositCardByOwnerID(Integer ownerID) {
        return bankOperationDao.getDepositCardByOwnerID(ownerID);
    }

    @Override
    public Deposit getDepositCardByCardID(Integer cardID) {
        return bankOperationDao.getDepositCardByCardID(cardID);
    }

    @Override
    public void updateDeposit(Deposit deposit, Sheet sheet) {
        bankOperationDao.updateDeposit(deposit);
        bankOperationDao.insertSheet(sheet);
    }

    @Override
    public void closeDeposit(Deposit deposit) {
        bankOperationDao.closeDeposit(deposit);
    }

    @Override
    public void createTimeDeposit(TimeDeposit timeDeposit, Sheet sheet) {
        bankOperationDao.createTimeDeposit(timeDeposit);
        bankOperationDao.insertSheet(sheet);
    }

    @Override
    public List<TimeDeposit> getTimeDepositByOwnerID(Integer ownerID) {
        return bankOperationDao.getTimeDepositByOwnerID(ownerID);
    }

    @Override
    public void withdrawTimeDeposit(Integer timeDepositID) {
        bankOperationDao.withdrawTimeDeposit(timeDepositID);
    }

    @Override
    public void createFinancial(Financial financial, Sheet sheet) {
        bankOperationDao.createFinancial(financial);
        bankOperationDao.insertSheet(sheet);
    }

    @Override
    public List<Financial> getFinancialByOwnerID(Integer ownerID) {
        return bankOperationDao.getFinancialByOwnerID(ownerID);
    }

    @Override
    public Financial getFinancial(Integer financialID) {
        return bankOperationDao.getFinancial(financialID);
    }

    @Override
    public void withdrawFinancial(Integer financialID) {
        bankOperationDao.withdrawFinancial(financialID);
    }
}
