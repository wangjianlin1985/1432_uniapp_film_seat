package com.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;

import com.entity.DiscussremendianyingEntity;
import com.entity.view.DiscussremendianyingView;

import com.service.DiscussremendianyingService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;
import java.io.IOException;

/**
 * 热门电影评论表
 * 后端接口
 * @author 
 * @email 
 * @date 2023-04-28 17:48:45
 */
@RestController
@RequestMapping("/discussremendianying")
public class DiscussremendianyingController {
    @Autowired
    private DiscussremendianyingService discussremendianyingService;


    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,DiscussremendianyingEntity discussremendianying,
		HttpServletRequest request){
        EntityWrapper<DiscussremendianyingEntity> ew = new EntityWrapper<DiscussremendianyingEntity>();

		PageUtils page = discussremendianyingService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, discussremendianying), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,DiscussremendianyingEntity discussremendianying, 
		HttpServletRequest request){
        EntityWrapper<DiscussremendianyingEntity> ew = new EntityWrapper<DiscussremendianyingEntity>();

		PageUtils page = discussremendianyingService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, discussremendianying), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( DiscussremendianyingEntity discussremendianying){
       	EntityWrapper<DiscussremendianyingEntity> ew = new EntityWrapper<DiscussremendianyingEntity>();
      	ew.allEq(MPUtil.allEQMapPre( discussremendianying, "discussremendianying")); 
        return R.ok().put("data", discussremendianyingService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(DiscussremendianyingEntity discussremendianying){
        EntityWrapper< DiscussremendianyingEntity> ew = new EntityWrapper< DiscussremendianyingEntity>();
 		ew.allEq(MPUtil.allEQMapPre( discussremendianying, "discussremendianying")); 
		DiscussremendianyingView discussremendianyingView =  discussremendianyingService.selectView(ew);
		return R.ok("查询热门电影评论表成功").put("data", discussremendianyingView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        DiscussremendianyingEntity discussremendianying = discussremendianyingService.selectById(id);
        return R.ok().put("data", discussremendianying);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        DiscussremendianyingEntity discussremendianying = discussremendianyingService.selectById(id);
        return R.ok().put("data", discussremendianying);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody DiscussremendianyingEntity discussremendianying, HttpServletRequest request){
    	discussremendianying.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(discussremendianying);
        discussremendianyingService.insert(discussremendianying);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody DiscussremendianyingEntity discussremendianying, HttpServletRequest request){
    	discussremendianying.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(discussremendianying);
        discussremendianyingService.insert(discussremendianying);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody DiscussremendianyingEntity discussremendianying, HttpServletRequest request){
        //ValidatorUtils.validateEntity(discussremendianying);
        discussremendianyingService.updateById(discussremendianying);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        discussremendianyingService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	









}
