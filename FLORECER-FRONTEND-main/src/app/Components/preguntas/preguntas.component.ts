import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  preguntas = [
    {
      texto: '¿Cuál es el tiempo de entrega?',
      respuesta: 'El tiempo de entrega suele ser de 3 a 5 días hábiles, dependiendo de tu ubicación.'
    },
    {
      texto: '¿Puedo devolver un producto?',
      respuesta: 'Sí, aceptamos devoluciones dentro de los primeros 30 días después de la compra.'
    },
    {
      texto: '¿Cómo elijo la talla correcta?',
      respuesta: 'Te recomendamos revisar nuestra guía de tallas disponible en cada página de producto.'
    },
    {
      texto: '¿Qué métodos de pago aceptan?',
      respuesta: 'Aceptamos pagos con tarjeta de crédito, débito, y PayPal.'
    },
    {
      texto: '¿Ofrecen membresías o descuentos?',
      respuesta: 'Sí, ofrecemos descuentos especiales y membresías. Consulta nuestra sección de promociones.'
    }
  ];

  toggleAnswer(event: any) {
    const answerElement = event.target.nextElementSibling;
    answerElement.style.display = answerElement.style.display === 'block' ? 'none' : 'block';
  }


  constructor() { }

  ngOnInit(): void {
    
  }
  
}
