package com.spring.bankgroup.mapper;

import com.spring.bankgroup.pojo.Sheet;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @ Author : 222403 20225016 尹浩宇
 * @ Date : 2022/10/17
 * @ Description :
 * @ Version : 1.0
 */

@Mapper
public interface SheetMapper {
    List<Sheet> getAllSheet();

    void insertSheet(Sheet sheet);

    List<Sheet> getSheetList(Integer userID);
}
