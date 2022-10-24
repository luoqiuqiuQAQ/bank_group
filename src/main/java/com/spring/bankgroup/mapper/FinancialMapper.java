package com.spring.bankgroup.mapper;

import com.spring.bankgroup.pojo.Financial;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/17
 * @ Description :
 * @ Version : 1.0
 */

@Mapper
public interface FinancialMapper {
    void deleteFinancial(Integer ownerID);

    List<Financial> getAllFinancial();

    void createFinancial(Financial financial);

    List<Financial> getFinancialByOwnerID(Integer ownerID);

    Financial getFinancial(Integer financialID);

    void withdrawFinancial(Integer financialID);


}
