package com.utp.rapicash.dao;

import org.springframework.data.repository.CrudRepository;

import com.utp.rapicash.entity.Producto;



public interface IProductoDao extends CrudRepository<Producto, Long  >{

}
