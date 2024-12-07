package com.utp.rapicash.service;

import java.util.List;

import com.utp.rapicash.entity.DetalleVenta;

public interface IDetalleVentaService {
	//DATA ACCESS OBJECT
		public List<DetalleVenta> findAll();
		
		//CREAR METODO PARA AGREGAR:
		public void save(DetalleVenta detalleVenta);
		
		//CREAR METODO PARA EDITAR:
		public DetalleVenta editarDetalleVenta(Long id);
		
		//CREAR METODO PARA ELIMINAR:
		public void eliminarDetalleVenta(Long id);
		
		public DetalleVenta findById(Long id);
		
}
