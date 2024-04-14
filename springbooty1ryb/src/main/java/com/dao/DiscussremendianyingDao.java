package com.dao;

import com.entity.DiscussremendianyingEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscussremendianyingVO;
import com.entity.view.DiscussremendianyingView;


/**
 * 热门电影评论表
 * 
 * @author 
 * @email 
 * @date 2023-04-28 17:48:45
 */
public interface DiscussremendianyingDao extends BaseMapper<DiscussremendianyingEntity> {
	
	List<DiscussremendianyingVO> selectListVO(@Param("ew") Wrapper<DiscussremendianyingEntity> wrapper);
	
	DiscussremendianyingVO selectVO(@Param("ew") Wrapper<DiscussremendianyingEntity> wrapper);
	
	List<DiscussremendianyingView> selectListView(@Param("ew") Wrapper<DiscussremendianyingEntity> wrapper);

	List<DiscussremendianyingView> selectListView(Pagination page,@Param("ew") Wrapper<DiscussremendianyingEntity> wrapper);
	
	DiscussremendianyingView selectView(@Param("ew") Wrapper<DiscussremendianyingEntity> wrapper);
	

}
