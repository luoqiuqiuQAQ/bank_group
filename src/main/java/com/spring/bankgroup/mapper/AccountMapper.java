package com.spring.bankgroup.mapper;

import com.spring.bankgroup.pojo.Account;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/17
 * @ Description :
 * @ Version : 1.0
 */

@Mapper
public interface AccountMapper {
    Account getByID(Integer ID);

    Account getByUserNameAndPassword(String userName, String password);

    void createAccount(Account account);

    void editAccount(Account account);

    List<Account> getAllAccount();

    void deleteAccount(Integer ID);
}
