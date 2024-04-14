package com.dao;

import com.entity.DianyingyuanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DianyingyuanVO;
import com.entity.view.DianyingyuanView;


/**
 * 电影院
 * 
 * @author 
 * @email 
 * @date 2023-04-28 17:48:45
 */
public interface DianyingyuanDao extends BaseMapper<DianyingyuanEntity> {
	
	List<DianyingyuanVO> selectListVO(@Param("ew") Wrapper<DianyingyuanEntity> wrapper);
	
	DianyingyuanVO selectVO(@Param("ew") Wrapper<DianyingyuanEntity> wrapper);
	
	List<DianyingyuanView> selectListView(@Param("ew") Wrapper<DianyingyuanEntity> wrapper);

	List<DianyingyuanView> selectListView(Pagination page,@Param("ew") Wrapper<DianyingyuanEntity> wrapper);
	
	DianyingyuanView selectView(@Param("ew") Wrapper<DianyingyuanEntity> wrapper);
	

}
