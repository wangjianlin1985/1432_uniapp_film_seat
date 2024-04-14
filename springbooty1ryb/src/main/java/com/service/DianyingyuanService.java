package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.DianyingyuanEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.DianyingyuanVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.DianyingyuanView;


/**
 * 电影院
 *
 * @author 
 * @email 
 * @date 2023-04-28 17:48:45
 */
public interface DianyingyuanService extends IService<DianyingyuanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DianyingyuanVO> selectListVO(Wrapper<DianyingyuanEntity> wrapper);
   	
   	DianyingyuanVO selectVO(@Param("ew") Wrapper<DianyingyuanEntity> wrapper);
   	
   	List<DianyingyuanView> selectListView(Wrapper<DianyingyuanEntity> wrapper);
   	
   	DianyingyuanView selectView(@Param("ew") Wrapper<DianyingyuanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DianyingyuanEntity> wrapper);
   	

}

