package com.spring.bankgroup.mapper;

import com.spring.bankgroup.pojo.Account;
import com.spring.bankgroup.pojo.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/17
 * @ Description :
 * @ Version : 1.0
 */

@Mapper
public interface UserMapper {
    User getUserByID(Integer ID);

    void createUser(Account account);

    void editUser(User user);

    List<User> getAllUser();

    void deleteUser(Integer ID);
}
