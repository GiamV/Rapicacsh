package com.utp.rapicash.dao;

import org.springframework.data.repository.CrudRepository;

import com.utp.rapicash.entity.Usuario;

public interface IUsuarioDao extends CrudRepository<Usuario, Long  > {

}
