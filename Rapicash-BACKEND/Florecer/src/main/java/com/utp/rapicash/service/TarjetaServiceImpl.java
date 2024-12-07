package com.utp.rapicash.service;

import java.security.SecureRandom;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.utp.rapicash.dao.IRolDao;
import com.utp.rapicash.dao.ITarjetaDao;
import com.utp.rapicash.entity.Rol;
import com.utp.rapicash.entity.Tarjeta;

@Service
public class TarjetaServiceImpl implements ITarjetaService {
	
	@Autowired
	private ITarjetaDao tarjetaDao;
	
	@Transactional(readOnly=true)
	
	@Override
	public List<Tarjeta> findAll() {
		
		return (List<Tarjeta>)tarjetaDao.findAll();
	}
	
	@Override
	@Transactional
	public void save(Tarjeta tarjeta) {
		tarjetaDao.save(tarjeta);
		
	}
	@Transactional
	@Override
	public Tarjeta editarTar(Long id) {
		// TODO Auto-generated method stub
		return tarjetaDao.findById(id).orElse(null);
	}
	@Transactional
	@Override
	public void eliminarTar(Long id) {
		tarjetaDao.deleteById(id);
		
	}

	@Override
	public Tarjeta findById(Long id) {
		return tarjetaDao.findById(id).orElse(null);
		
	}
	
	



}
