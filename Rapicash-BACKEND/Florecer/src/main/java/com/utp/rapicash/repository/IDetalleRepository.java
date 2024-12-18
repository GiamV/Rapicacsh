package com.utp.rapicash.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.utp.rapicash.entity.DetalleVenta;


public interface IDetalleRepository extends JpaRepository<DetalleVenta, Long> { 
	@Query(value= "{call consultadetventa(:xcodcab)}",nativeQuery=true)
	List<DetalleVenta> findByCabV(@Param("xcodcab")Long xcodcab);
}
