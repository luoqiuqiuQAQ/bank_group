package com.spring.bankgroup.dao;

import com.spring.bankgroup.pojo.Account;
import com.spring.bankgroup.pojo.User;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/17
 * @ Description :
 * @ Version : 1.0
 */

public interface UserOperationDao {

    void createAccount(String username, String password);

    Account getAccount(String username, String password);

    void editAccount(Account account);

    Account getAccount(Integer ID);

    void createUser(Account account);

    User getUserInfo(Integer ID);

    void editUserInfo(User user);

    boolean checkLoginStatus(Account account);
}
