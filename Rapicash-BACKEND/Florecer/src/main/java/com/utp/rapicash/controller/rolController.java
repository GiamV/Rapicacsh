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

import com.utp.rapicash.entity.Rol;
import com.utp.rapicash.service.IRolService;




@CrossOrigin(origins= {"http://localhost/4200"})
@RestController
@RequestMapping("/rol")
public class rolController {
	
	@Autowired
	private IRolService rolService;
	
	//LISTAR LOS ROLES
	@GetMapping("/roles")
	public List<Rol> index(){
		return rolService.findAll();
	}
	
	//BUSCAR ROL POR ID
	@GetMapping("rol/{id}")
	public Rol rol(@PathVariable Long id) {
		return rolService.findById(id);
	}
	
	//CREAR NUEVO ROL
	@PostMapping("/rolnew")
	public Rol crear(@RequestBody Rol rol) {
		rolService.save(rol);
		return rolService.findById(rol.getIdRol());
	}
	
	//ACTUALIZAR ROL
	@PutMapping("/rolupdate/{id}")
	public Rol actualizar(@RequestBody Rol rol,@PathVariable Long id) {
		Rol rolActual=rolService.findById(id);
		rolActual.setRol(rol.getRol());
		rolService.save(rolActual);
		return rolService.findById(id);
	}
	
	//ELIMINAR ROL
	@DeleteMapping("/roldelete/{id}")
	public void delete(@PathVariable Long id) {
		rolService.eliminarRol(id);
	}
	
	
}
