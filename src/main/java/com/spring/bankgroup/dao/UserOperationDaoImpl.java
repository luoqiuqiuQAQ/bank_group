package com.spring.bankgroup.dao;

import com.spring.bankgroup.mapper.AccountMapper;
import com.spring.bankgroup.mapper.UserMapper;
import com.spring.bankgroup.pojo.Account;
import com.spring.bankgroup.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/18
 * @ Description :
 * @ Version : 1.0
 */
@Repository("userOperationDao")
public class UserOperationDaoImpl implements UserOperationDao {

    @Autowired
    private AccountMapper accountMapper;
    @Autowired
    private UserMapper userMapper;

    @Override
    public void createAccount(String username, String password) {
        Account account = new Account();
        account.setUserName(username);
        account.setPassword(password);
        account.setType(1);
        accountMapper.createAccount(account);
    }

    @Override
    public Account getAccount(String username, String password) {
        return accountMapper.getByUserNameAndPassword(username, password);
    }

    @Override
    public void editAccount(Account account) {
        accountMapper.editAccount(account);
    }

    @Override
    public Account getAccount(Integer ID) {
        return accountMapper.getByID(ID);
    }

    @Override
    public void createUser(Account account) {
        userMapper.createUser(account);
    }

    @Override
    public User getUserInfo(Integer ID) {
        return userMapper.getUserByID(ID);
    }

    @Override
    public void editUserInfo(User user) {
        userMapper.editUser(user);
    }

    @Override
    public boolean checkLoginStatus(Account account) {
        return account != null;
    }
}
