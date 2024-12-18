package com.utp.rapicash.serviceR;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utp.rapicash.entity.DetalleProveedor;
import com.utp.rapicash.repository.DetaProvRepository;


@Service
public class DetaProvServiceIm {
	
	@Autowired
	DetaProvRepository detaProvRepo;
	
	public List<DetalleProveedor> findByIDP(Long xcodprov) {
		return (List<DetalleProveedor>) detaProvRepo.findByIDP(xcodprov);
	}

}
