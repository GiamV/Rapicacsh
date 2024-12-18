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

import com.utp.rapicash.entity.Categoria;
import com.utp.rapicash.service.ICategoriaService;


@CrossOrigin(origins= {"http://localhost/4200"})
@RestController
@RequestMapping("/categoria")
public class categoriaController {
	
	@Autowired
	private ICategoriaService categoriaService;
	
	//LISTAR CATEGORIAS
	@GetMapping("/categorias")
	public List<Categoria>listar(){
		return categoriaService.findAll();
	}
	
	//BUSCAR CATEGORIA POR SU ID
	@GetMapping("/categoria/{id}")
	public Categoria categoria(@PathVariable Long id) {
		return categoriaService.findById(id);
	}
	
	//CREAR NUEVA CATEGORIA
	@PostMapping("/categorianew")
	public Categoria categorianew(@RequestBody Categoria categoria) {
		categoriaService.save(categoria);
		return categoriaService.findById(categoria.getIdCategoria());
	}
	
	//ACTUALIZAR CATEGORIA
	@PutMapping("/categoriaupdate/{id}")
	public Categoria actualizar(@RequestBody Categoria categoria,@PathVariable Long id) {
		Categoria categoriaActual=categoriaService.findById(id);
		categoriaActual.setCategoria(categoria.getCategoria());
		categoriaActual.setEstado(categoria.getEstado());
		
		categoriaService.save(categoriaActual);
		return categoriaService .findById(id);
			
	}
	
	//ELIMINAR CATEGORIA 
	@DeleteMapping("/categoriadelete/{id}")
	public void delete(@PathVariable Long id) {
		categoriaService.eliminarCategoria(id);
	}
	
	@DeleteMapping("/categoriaestado/{id}")
	public void deleteestado(@PathVariable Long id) {
		Categoria categoriaActual=categoriaService.findById(id);
		categoriaActual.setEstado(0);
		categoriaService.save(categoriaActual);
		
	}
	
}
