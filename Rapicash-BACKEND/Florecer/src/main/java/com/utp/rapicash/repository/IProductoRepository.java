package com.utp.rapicash.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.utp.rapicash.entity.Producto;


public interface IProductoRepository extends JpaRepository<Producto, Long> {
	
	@Query(value= "{call buscar_pro_cat(:xcodcat)}",nativeQuery=true)
	List<Producto> findByCat(@Param("xcodcat")Long xcodcat);
}
