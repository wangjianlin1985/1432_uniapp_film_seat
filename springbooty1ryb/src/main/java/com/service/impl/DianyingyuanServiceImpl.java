package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.DianyingyuanDao;
import com.entity.DianyingyuanEntity;
import com.service.DianyingyuanService;
import com.entity.vo.DianyingyuanVO;
import com.entity.view.DianyingyuanView;

@Service("dianyingyuanService")
public class DianyingyuanServiceImpl extends ServiceImpl<DianyingyuanDao, DianyingyuanEntity> implements DianyingyuanService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DianyingyuanEntity> page = this.selectPage(
                new Query<DianyingyuanEntity>(params).getPage(),
                new EntityWrapper<DianyingyuanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DianyingyuanEntity> wrapper) {
		  Page<DianyingyuanView> page =new Query<DianyingyuanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<DianyingyuanVO> selectListVO(Wrapper<DianyingyuanEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public DianyingyuanVO selectVO(Wrapper<DianyingyuanEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<DianyingyuanView> selectListView(Wrapper<DianyingyuanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DianyingyuanView selectView(Wrapper<DianyingyuanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
