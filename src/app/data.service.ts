import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {


  //https://www.youtube.com/watch?v=I317BhehZKM   :
  private DataSource = new BehaviorSubject<Array<any>>([])  //se escribe Arrar<any> en lugar de stringg o number,,  ([]) es el array vacio por default

  currentData = this.DataSource.asObservable(); //parentesis

  constructor() {} //no se

  changeData(data_de_productos:Array<any>){
    this.DataSource.next(data_de_productos) //data_de_productos es el nombre del param  ()
  }


  productos: any[] = [
    {
      Codigo:1,
      Descripcion: 'galletas',
      Precio_Compra: 10,
      Precio_Venta:16,
      Existencia: 88,
    },
    {
      Codigo:2,
      Descripcion: 'mermelada',
      Precio_Compra: 65,
      Precio_Venta:80,
      Existencia: 47,
    },
    {
      Codigo:3,
      Descripcion: 'palomitas',
      Precio_Compra: 12,
      Precio_Venta:15,
      Existencia: 90,
    },
  ];

  addData(product: any) {
    this.productos.push(product);
  }
  getData() {
    return this.productos;
  }
  editData(product:any){
    console.log(product.Codigo)
  }
  //quite filter data


}