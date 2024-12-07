import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-listar-pro',
  templateUrl: './listar-pro.component.html',
  styleUrls: ['./listar-pro.component.css']
})
export class ListarProComponent implements OnInit {

  rows = [];

  selected = [];

  columns: any[] = [{ name: 'producto' }, { name: 'stock' }, { name: 'precio' },  { name: 'precioCompra' }];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  productos:Producto[]=[];
  productoss:Producto[]=[];
  productosfiltro:Producto[]=[];
  constructor(private rutaActiva: ActivatedRoute,private router:Router, private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      productos=>{
        this.productos=productos;

        console.log(productos);
      }
    );
  }

  Delete(producto: Producto) {
    // Guardar el producto seleccionado antes de realizar la actualización
    const selectedProducto = this.productoss[0]; // Si solo seleccionas un producto a la vez
  
    this.productoService.deleteProductoEstado(producto).subscribe(data => {
      // Buscar el producto en el array y actualizar su estado
      const index = this.productos.findIndex(p => p.idProducto === producto.idProducto);
      if (index !== -1) {
        this.productos[index].estado = producto.estado === 1 ? 0 : 1;
      }
  
      // Actualizar la lista de productos si es necesario
      this.productoService.getProductos().subscribe(productos => {
        this.productos = productos;
  
        // Volver a seleccionar el producto que estaba previamente seleccionado
        const selectedIndex = this.productos.findIndex(p => p.idProducto === selectedProducto.idProducto);
        if (selectedIndex !== -1) {
          this.productoss = [this.productos[selectedIndex]]; // Reasigna la selección
        }
      });
    });
  }
  

  Editar(producto:Producto):void{
    localStorage.setItem("idProducto",producto.idProducto.toString());
    this.router.navigate(["cliente/cliente-editproducto"]);
  }
  onSelect({ productoss }) {
    console.log('Select Event', productoss, this.productoss);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  // avisar(){
  //   for( let pro of this.productos){
  //     if(pro.categoria.idCategoria!=3){
  //       this.productosfiltro.push(pro);
  //     }
  //   }
  // }

}
