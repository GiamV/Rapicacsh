package com.utp.rapicash.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.utp.rapicash.dao.IRolDao;
import com.utp.rapicash.entity.Rol;
@Service
public class IRolServiceImpl implements IRolService {

	@Autowired
	private IRolDao rolDao;
	
	@Transactional(readOnly=true)
	
	@Override
	public List<Rol> findAll() {
		
		return (List<Rol>)rolDao.findAll();
	}
	
	@Override
	@Transactional
	public void save(Rol rol) {
		rolDao.save(rol);
		
	}
	@Transactional
	@Override
	public Rol editarRol(Long id) {
		// TODO Auto-generated method stub
		return rolDao.findById(id).orElse(null);
	}
	@Transactional
	@Override
	public void eliminarRol(Long id) {
		rolDao.deleteById(id);
		
	}

	@Override
	public Rol findById(Long id) {
		return rolDao.findById(id).orElse(null);
		
	}

}
