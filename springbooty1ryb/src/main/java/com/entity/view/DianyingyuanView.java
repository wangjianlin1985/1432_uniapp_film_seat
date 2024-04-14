package com.entity.view;

import com.entity.DianyingyuanEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 电影院
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-04-28 17:48:45
 */
@TableName("dianyingyuan")
public class DianyingyuanView  extends DianyingyuanEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DianyingyuanView(){
	}
 
 	public DianyingyuanView(DianyingyuanEntity dianyingyuanEntity){
 	try {
			BeanUtils.copyProperties(this, dianyingyuanEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
