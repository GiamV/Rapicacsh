package com.utp.rapicash.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.utp.rapicash.entity.DetalleGuiaEntrada;


public interface IDetalleGuiaRepository extends JpaRepository<DetalleGuiaEntrada, Long> { 
	@Query(value= "{call consultadetcompra(:xcodguia)}",nativeQuery=true)
	List<DetalleGuiaEntrada> findByCabV(@Param("xcodguia")Long xcodguia);
}
