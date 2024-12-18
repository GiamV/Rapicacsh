package com.utp.rapicash.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.utp.rapicash.dao.ICategoriaDao;
import com.utp.rapicash.entity.Categoria;
@Service
public class ICategoriaServiceImpl implements ICategoriaService {

	@Autowired
	private ICategoriaDao categoriaDao;
	
	@Transactional(readOnly=true)
	
	@Override
	public List<Categoria> findAll() {
		
		return (List<Categoria>)categoriaDao.findAll();
	}
	@Transactional
	@Override
	public void save(Categoria categoria) {
		categoriaDao.save(categoria);
		
	}
	@Transactional
	@Override
	public Categoria editarCategoria(Long id) {
		// TODO Auto-generated method stub
		return categoriaDao.findById(id).orElse(null);
	}
	@Transactional
	@Override
	public void eliminarCategoria(Long id) {
		categoriaDao.deleteById(id);
		
	}
	@Override
	public Categoria findById(Long id) {
		return categoriaDao.findById(id).orElse(null);
	}

}
