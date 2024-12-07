package com.utp.rapicash.service;

import java.util.List;

import com.utp.rapicash.entity.Usuario;

public interface IUsuarioService {
	//DATA ACCESS OBJECT
			public List<Usuario> findAll();
			
			//CREAR METODO PARA AGREGAR:
			public void save(Usuario usuario);
			
			//CREAR METODO PARA EDITAR:
			public Usuario editarUsuario(Long id);
			
			//CREAR METODO PARA ELIMINAR:
			public void eliminarUsuario(Long id);
			
			public Usuario findById(Long id);
}
