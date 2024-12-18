package com.utp.rapicash.serviceR;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utp.rapicash.entity.Producto;
import com.utp.rapicash.repository.IProductoRepository;

@Service
public class CategoriaServiceIm {
	@Autowired
	IProductoRepository productoRepo;
	
	public List<Producto> findByCate(Long codcat) {
		return (List<Producto>) productoRepo.findByCat(codcat);
	}

}
