package com.utp.rapicash.serviceR;

import java.security.SecureRandom;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utp.rapicash.entity.Tarjeta;
import com.utp.rapicash.entity.Usuario;
import com.utp.rapicash.repository.IUsuarioRepository;

@Service
public class UsuarioServiceIm {
	
	@Autowired
	IUsuarioRepository usuarioRepo;
	
	public Usuario iniciosesion(String ida,String idas) {
		return usuarioRepo.inicios(ida,idas);
	}
	
	public Usuario findByU(String ida) {
		return usuarioRepo.findByUser(ida);
	}
	
	 private static final SecureRandom random = new SecureRandom();

	    public Tarjeta generarTarjeta() {
	        Tarjeta tarjeta = new Tarjeta();
	        tarjeta.setNumeroTarjeta(generarNumeroTarjeta());
	        tarjeta.setCcv(generarCCV());
	        tarjeta.setFechaVencimiento(generarFechaVencimiento());
	        return tarjeta;
	    }
	    
	    private String generarNumeroTarjeta() {
	        // Genera un número de tarjeta de 16 dígitos
	        StringBuilder numeroTarjeta = new StringBuilder();
	        for (int i = 0; i < 16; i++) {
	            numeroTarjeta.append(random.nextInt(10));
	        }
	        return numeroTarjeta.toString();
	    }

	    private String generarCCV() {
	        // Genera un CCV de 3 dígitos
	        StringBuilder ccv = new StringBuilder();
	        for (int i = 0; i < 3; i++) {
	            ccv.append(random.nextInt(10));
	        }
	        return ccv.toString();
	    }

	    private String generarFechaVencimiento() {
	        // Genera una fecha de vencimiento entre 2 y 5 años a partir de hoy
	        LocalDate fechaVencimiento = LocalDate.now().plusYears(random.nextInt(4) + 2);
	        return fechaVencimiento.format(DateTimeFormatter.ofPattern("MM/yy"));
	    }
	
	
	
}
