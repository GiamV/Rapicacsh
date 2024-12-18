package com.utp.rapicash.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.utp.rapicash.dao.IProductoDao;
import com.utp.rapicash.entity.Producto;
@Service
public class IProductoServiceImpl implements IProductoService {

	@Autowired
	private IProductoDao productoDao;
	
	@Transactional(readOnly=true)
	
	@Override
	public List<Producto> findAll() {
		
		return (List<Producto>)productoDao.findAll();
	}
	@Transactional
	@Override
	public void save(Producto producto) {
		productoDao.save(producto);
		
	}
	@Transactional
	@Override
	public Producto editarProducto(Long id) {
		// TODO Auto-generated method stub
		return productoDao.findById(id).orElse(null);
	}
	@Transactional
	@Override
	public void eliminarProducto(Long id) {
		productoDao.deleteById(id);
		
	}
	@Override
	public Producto findById(Long id) {
		return productoDao.findById(id).orElse(null);
		
	}

}
