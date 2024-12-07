import { GuiaEntrada } from "./GuiaEntrada";
import { Producto } from "./Producto";
import { Proveedor } from "./Proveedor";

export class DetalleGuiaEntrada{
    public idDetalleGuia!:number;
    public cantidad!:number;
    public precio!:number;
    public producto!:Producto;
    public guia_Entrada!:GuiaEntrada;
    public proveedor!:Proveedor;
}