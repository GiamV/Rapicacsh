package com.utp.rapicash.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utp.rapicash.dao.IProveedorDao;
import com.utp.rapicash.entity.Proveedor;
@Service
public class IProveedorServiceImpl implements IProveedorService {

	@Autowired
	private IProveedorDao ProveedorDao;
	
	@Override
	public List<Proveedor> findAll() {
		return (List<Proveedor>)ProveedorDao.findAll();
	}

	@Override
	public void save(Proveedor proveedor) {
		ProveedorDao.save(proveedor);
	}

	@Override
	public Proveedor editarProveedor(Long id) {
		return ProveedorDao.findById(id).orElse(null);
	}

	@Override
	public void eliminarProveedor(Long id) {
		ProveedorDao.deleteById(id);
	}

	@Override
	public Proveedor findById(Long id) {
		return ProveedorDao.findById(id).orElse(null);
	}

}
