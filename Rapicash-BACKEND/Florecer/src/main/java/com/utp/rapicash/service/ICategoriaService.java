package com.utp.rapicash.service;

import java.util.List;

import com.utp.rapicash.entity.Categoria;

public interface ICategoriaService {
	//DATA ACCESS OBJECT
	public List<Categoria> findAll();
	
	//CREAR METODO PARA AGREGAR:
	public void save(Categoria categoria);
	
	//CREAR METODO PARA EDITAR:
	public Categoria editarCategoria(Long id);
	
	//CREAR METODO PARA ELIMINAR:
	public void eliminarCategoria(Long id);
	
	public Categoria findById(Long id);
}
