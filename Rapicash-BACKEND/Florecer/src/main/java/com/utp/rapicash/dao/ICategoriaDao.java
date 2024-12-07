package com.utp.rapicash.dao;

import org.springframework.data.repository.CrudRepository;

import com.utp.rapicash.entity.Categoria;


public interface ICategoriaDao extends CrudRepository<Categoria, Long  > {

}
