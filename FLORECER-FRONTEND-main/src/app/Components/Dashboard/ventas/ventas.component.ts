import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { TipoPago } from 'src/app/Models/TipoPago';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';
import { TipopagoService } from 'src/app/Service/tipopago.service';
Chart.register(...registerables)
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  ctx: any;
  label: string[] = [];
  label2: string[] = [];
  data: number[] = [];
  data2: number[] = [];
  chart: Chart | null = null;
  chart2: Chart | null = null;
  constructor(private carrioservice:CarritoComprasService, private dash:TipopagoService) { }

  ngOnInit(): void {
    this.getDetalles();
    this.getDetalles2();
  }

  cargar(labels: string[], data: number[]) {
    const canvas = document.getElementById('myChart6') as HTMLCanvasElement;
  
    if (!canvas) {
      console.error('Elemento canvas no encontrado: myChart6');
      return;
    }
  
    // Destruye el gráfico anterior si ya existe
    if (this.chart) {
      this.chart.destroy();
    }
  
    // Crea un nuevo gráfico
    this.chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Dinero Recaudado por Mes',
          data: data,
          backgroundColor: [
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              // Formatea los valores con el símbolo de dólares
              callback: function (value) {
                return `$${value}`;
              }
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `S/.${tooltipItem.raw}`; // Formatea las etiquetas del tooltip
              }
            }
          }
        }
      }
    });
  }

  getDetalles() {
    this.dash.consultaVentas().subscribe(
      (detalles: { mes: string; totalDinero: number }[]) => {
        // Procesa los datos recibidos
        this.label = detalles.map(detalle => detalle.mes); // Extrae los meses
        this.data = detalles.map(detalle => detalle.totalDinero); // Extrae los valores

        // Carga los datos en el gráfico
        this.cargar(this.label, this.data);
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  getDetalles2() {
    this.dash.consultaVentasCant().subscribe(
      (detalles: any[]) => {
        // Procesa los datos
        detalles.forEach(detalle => {
          this.label2.push(detalle.mes); // Agrega los meses
          this.data2.push(detalle.totalVentas); // Agrega las ventas
        });
        this.cargar2(this.label2, this.data2); // Carga el gráfico con los datos procesados
      },
      error => {
        console.error('Error al obtener los detalles de ventas mensuales:', error);
      }
    );
  }
  
  
  cargar2(labels: string[], data: number[]) {
    const canvas = document.getElementById('myChart5') as HTMLCanvasElement;
    
    if (!canvas) {
      console.error('Elemento canvas no encontrado: myChart5');
      return;
    }
  
    // Crea el gráfico tipo pastel
    new Chart(canvas.getContext('2d') as CanvasRenderingContext2D, {
      type: 'pie', // Gráfico pastel
      data: {
        labels: labels,
        datasets: [{
          label: 'Ventas por Mes',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.raw} ventas`; // Formatea los tooltips con "ventas"
              }
            }
          }
        }
      }
    });
  }
  
  
  
}