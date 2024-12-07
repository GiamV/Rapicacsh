package com.utp.rapicash.serviceR;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utp.rapicash.entity.DetalleGuiaEntrada;
import com.utp.rapicash.entity.GuiaEntrada;
import com.utp.rapicash.repository.IGuiaEntradaRepository;

@Service
public class GuiaEmtradaServiceIm {
	@Autowired
	IGuiaEntradaRepository GuiaRepo;
	
	
	public void CompraCabe(Long codcab,Long xcoduser) {
		GuiaRepo.CompraGuia(codcab,xcoduser);
	}
	public GuiaEntrada FindByUserAndEst(Long xcoduser) {
		return GuiaRepo.getCabeidUser(xcoduser);
	}
	
	public List<GuiaEntrada> listarGuiaPen() {
		return (List<GuiaEntrada>) GuiaRepo.guiaEntradaPendiente();
	}
	

}
