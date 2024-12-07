package com.utp.rapicash.serviceR;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utp.rapicash.entity.DetalleGuiaEntrada;
import com.utp.rapicash.repository.IDetalleGuiaRepository;


@Service
public class DetaGuiaServiceIm {
	@Autowired
	IDetalleGuiaRepository DetalleGuiaRepo;
	
	public List<DetalleGuiaEntrada> findBycodGui(Long codgui) {
		return (List<DetalleGuiaEntrada>) DetalleGuiaRepo.findByCabV(codgui);
	}

}
