package com.utp.rapicash.service;

import java.util.List;

import com.utp.rapicash.entity.TipoPago;

public interface ITipoPagoService {
	//DATA ACCESS OBJECT
		public List<TipoPago> findAll();
		
		//CREAR METODO PARA AGREGAR:
		public void save(TipoPago tipoPago);
		
		//CREAR METODO PARA EDITAR:
		public TipoPago editarTipoPago(Long id);
		
		//CREAR METODO PARA ELIMINAR:
		public void eliminarTipoPago(Long id);
		
		public TipoPago findById(Long id);
}
