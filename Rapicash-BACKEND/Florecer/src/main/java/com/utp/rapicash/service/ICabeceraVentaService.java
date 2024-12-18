package com.utp.rapicash.service;

import java.util.List;

import com.utp.rapicash.entity.CabeceraVenta;


public interface ICabeceraVentaService {
	//DATA ACCESS OBJECT
			public List<CabeceraVenta> findAll();
			
			//CREAR METODO PARA AGREGAR:
			public void save(CabeceraVenta cabeceraVenta);
			
			//CREAR METODO PARA EDITAR:
			public CabeceraVenta editarCabeceraVenta(Long id);
			
			//CREAR METODO PARA ELIMINAR:
			public void eliminarCabeceraVenta(Long id);
			
			public CabeceraVenta findById(Long id);
}
