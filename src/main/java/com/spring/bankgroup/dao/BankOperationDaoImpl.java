package com.spring.bankgroup.dao;

import com.spring.bankgroup.mapper.DepositMapper;
import com.spring.bankgroup.mapper.FinancialMapper;
import com.spring.bankgroup.mapper.SheetMapper;
import com.spring.bankgroup.mapper.TimeDepositMapper;
import com.spring.bankgroup.pojo.Deposit;
import com.spring.bankgroup.pojo.Financial;
import com.spring.bankgroup.pojo.Sheet;
import com.spring.bankgroup.pojo.TimeDeposit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/20
 * @ Description :
 * @ Version : 1.0
 */

@Repository("BankOperationDao")
public class BankOperationDaoImpl implements BankOperationDao {

    @Autowired
    private DepositMapper depositMapper;
    @Autowired
    private TimeDepositMapper timeDepositMapper;
    @Autowired
    private FinancialMapper financialMapper;
    @Autowired
    private SheetMapper sheetMapper;

    @Override
    public void createDepositCard(Deposit deposit) {
        depositMapper.createDepositCard(deposit);
    }

    @Override
    public List<Deposit> getDepositCardByOwnerID(Integer ownerID) {
        return depositMapper.getDepositCardByOwnerID(ownerID);
    }

    @Override
    public Deposit getDepositCardByCardID(Integer cardID) {
        return depositMapper.getDepositCardByCardID(cardID);
    }

    @Override
    public void updateDeposit(Deposit deposit) {
        depositMapper.updateDeposit(deposit);
    }

    @Override
    public void closeDeposit(Deposit deposit) {
        depositMapper.closeDeposit(deposit);
    }

    @Override
    public void createTimeDeposit(TimeDeposit timeDeposit) {
        timeDepositMapper.createTimeDeposit(timeDeposit);
    }

    @Override
    public List<TimeDeposit> getTimeDepositByOwnerID(Integer ownerID) {
        return timeDepositMapper.getTimeDepositByOwnerID(ownerID);
    }

    @Override
    public void withdrawTimeDeposit(Integer timeDepositID) {
        timeDepositMapper.withdrawTimeDeposit(timeDepositID);
    }

    @Override
    public void createFinancial(Financial financial) {
        financialMapper.createFinancial(financial);
    }

    @Override
    public List<Financial> getFinancialByOwnerID(Integer ownerID) {
        return financialMapper.getFinancialByOwnerID(ownerID);
    }

    @Override
    public Financial getFinancial(Integer financialID) {
        return financialMapper.getFinancial(financialID);
    }

    @Override
    public void withdrawFinancial(Integer financialID) {
        financialMapper.withdrawFinancial(financialID);
    }

    @Override
    public void insertSheet(Sheet sheet) {
        sheetMapper.insertSheet(sheet);
    }

    @Override
    public List<Sheet> getSheetList(Integer userID) {
        return sheetMapper.getSheetList(userID);
    }
}
