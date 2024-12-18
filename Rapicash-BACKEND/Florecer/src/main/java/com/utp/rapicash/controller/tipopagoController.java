package com.utp.rapicash.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utp.rapicash.entity.TipoPago;
import com.utp.rapicash.service.ITipoPagoService;

@CrossOrigin(origins= {"http://localhost/4200"})
@RestController
@RequestMapping("/tipopago")
public class tipopagoController {
	
	@Autowired
	private ITipoPagoService tipopagoService;
	
	//LISTAR TIPOS DE PAGO
	@GetMapping("/tipospago")
	private List<TipoPago> listar(){
		return tipopagoService.findAll();
	}
	
	//BUSCAR TIPO DE PAGO POR SU ID
	@GetMapping("tipopago/{id}")
	private TipoPago tipopago(@PathVariable Long id) {
		return tipopagoService.findById(id);
	}
	
	//CREAR NUEVO TIPO DE PAGO
	@PostMapping("/tipopagonew")
	public TipoPago tipopagonew(@RequestBody TipoPago tipopago) {
		tipopagoService.save(tipopago);
		return tipopagoService.findById(tipopago.getIdTipoPago());
	}
	
	//ACTUALIZAR TIPO DE PAGO
	@PutMapping("/tipopagoupdate/{id}")
	public TipoPago actualizar(@RequestBody TipoPago tipopago,@PathVariable Long id) {
		TipoPago tipopagoActual=tipopagoService.findById(id);
		tipopagoActual.setTipoPago(tipopago.getTipoPago());
		
		tipopagoService.save(tipopagoActual);
		return tipopagoService.findById(id);
	}
	
	//ELIMINAR TIPO DE PAGO
	@DeleteMapping("/tipopago/{id}")
	public void delete(@PathVariable Long id) {
		tipopagoService.eliminarTipoPago(id);
	}
	
}
