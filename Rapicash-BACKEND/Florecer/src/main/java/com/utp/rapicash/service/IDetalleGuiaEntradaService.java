package com.utp.rapicash.service;

import java.util.List;

import com.utp.rapicash.entity.DetalleGuiaEntrada;

public interface IDetalleGuiaEntradaService {
	//DATA ACCESS OBJECT
	public List<DetalleGuiaEntrada> findAll();
		
	//CREAR METODO PARA AGREGAR:
	public void save(DetalleGuiaEntrada detalleGuiaEntrada);
		
	//CREAR METODO PARA EDITAR:
	public DetalleGuiaEntrada editarDetalleGuiaEntrada(Long id);
		
	//CREAR METODO PARA ELIMINAR:
	public void eliminarDetalleGuiaEntrada(Long id);
	
	//CREAR METODO PARA BUSCAR X ID:
	public DetalleGuiaEntrada findById(Long id);
}
