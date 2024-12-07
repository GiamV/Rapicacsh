import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { CargajsService } from 'src/app/Service/cargajs.service';
import { ProductoService } from 'src/app/Service/producto.service';



@Component({
  selector: 'app-productList',
  templateUrl: './app-productList.component.html',
  styleUrls: ['./app-productList.component.css']
})
export class ProductListComponent implements OnInit {
  urlTree: any;
  id: any;
  cat:String

  constructor(private CargarJS: CargajsService,private rutaActiva: ActivatedRoute,private router:Router, private productoService:ProductoService) {
    this.urlTree = this.router.parseUrl(this.router.url);
    CargarJS.cargar(["js/file"])
    this.id = this.urlTree.queryParams['id'];
   }

  productos:Producto[]=[];
  public producto:Producto = new Producto()


  ngOnInit(): void {
  
















    

    if(this.id==1){
      this.cat="Niños";
    }
    console.log(this.id)
    this.productoService.getProductoIdCat(this.id).subscribe(
      productos=>{
        this.productos=productos;
        console.log(productos);
      }
    );
  }

  ObtenerInfo(producto:Producto):void{
    localStorage.setItem("codPro",producto.idProducto.toString());
    this.router.navigate(["productodetalle"]);
    console.log(producto);
  }

}
