import { Producto } from "./Producto";
import { Proveedor } from "./Proveedor";

export class DetalleProveedor{
    public idDetalleProveedor!:number;
    public producto!: Producto;
    public proveedor!:Proveedor;
    public estado!:number;
}