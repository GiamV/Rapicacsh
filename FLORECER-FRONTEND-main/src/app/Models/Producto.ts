import { Categoria } from "./Categoria";

export class Producto{
    public idProducto!:number;
    public producto!:string;
    public imagen!:string;
    public stock!:number;
    public descripcion!:string;
    public precio!:number;
    public precioCompra!:number;
    public estado!:number;
    public categoria!:Categoria;
}