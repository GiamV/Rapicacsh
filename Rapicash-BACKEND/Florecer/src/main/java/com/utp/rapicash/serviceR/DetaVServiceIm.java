package com.utp.rapicash.serviceR;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utp.rapicash.entity.DetalleVenta;
import com.utp.rapicash.repository.IDetalleRepository;

@Service
public class DetaVServiceIm {
	@Autowired
	IDetalleRepository DetalleRepo;
	
	public List<DetalleVenta> findByCaU(Long codcab) {
		return (List<DetalleVenta>) DetalleRepo.findByCabV(codcab);
	}

}
