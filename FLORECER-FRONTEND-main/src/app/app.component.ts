import { Component } from '@angular/core';
import { CargajsService } from './Service/cargajs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor( private CargarScript:CargajsService) {
    CargarScript.cargar(["js/file"])
  }
  title = 'Angular';
}
