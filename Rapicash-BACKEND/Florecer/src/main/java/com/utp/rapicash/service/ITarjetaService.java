package com.utp.rapicash.service;

import java.util.List;

import com.utp.rapicash.entity.Rol;
import com.utp.rapicash.entity.Tarjeta;

public interface ITarjetaService {
	public List<Tarjeta> findAll();
	
	public Tarjeta findById (Long id);
	
	//CREAR METODO PARA AGREGAR:
	public void save(Tarjeta rol);
	
	//CREAR METODO PARA EDITAR:
	public Tarjeta editarTar(Long id);
	
	//CREAR METODO PARA ELIMINAR:
	public void eliminarTar(Long id);

}
