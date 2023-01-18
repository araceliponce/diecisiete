import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {


    //yt

  // data_de_productos: any[] = [];
  // data:Array<any>
  // data_de_productos= new Array;

  data_de_productos=[
    {
      Codigo:1,
      Descripcion: 'galletas',
      Precio_Compra: 10,
      Precio_Venta:16,
      Existencia: 100,
    },]

  constructor (private data: DataService){}

  ngOnInit() {

    // this.data.currentData.subscribe(data_de_productos => this.data_de_productos = this.data_de_productos)

    this.data_de_productos = this.data.productos; //los igualo de forma simple en lugar del metodo anterior

    console.log ('on init', this.data_de_productos) 

    console.log(this.data) //data es un objeto, contiene a DataSource{}, currentData{} y Productos[].
    console.log(this.data.productos) //ARRAY DE PRODUCTOS
  }


  newData(){
    this.data.currentData//.changeData(['hiiiiii'])

    this.data.productos.forEach((item,indice)=>{
      console.log(indice+1, item)
    })   

    console.log(this.data_de_productos)
  }


/*   constructor(
    private rutaActiva: ActivatedRoute,
    private dataService: DataService
  ) {}
  
  @Input() datos_recibidos: any[] = [];
  // datos_recibidos: any[] = [];

  ngOnInit() {
    this.datos_recibidos = this.dataService.getData();
  } */






  //AHORA ESTE RECIBE DATOS DEL PADRE (EDIT PAGE)
  //  @Input() datos_recibidos: Array<any> =[];


/*    productos = [
    {
      Codigo:1,
      Descripcion: 'galletas',
      'Precio de compra': 10,
      'Precio de venta':16,
      Existencia: 100,
    },
    {
      Codigo:2,
      Descripcion: 'mermelada',
      'Precio de compra': 65,
      'Precio de venta':80,
      Existencia: 47,
    },
    {
      Codigo:3,
      Descripcion: 'palomitas',
      'Precio de compra': 12,
      'Precio de venta':15,
      Existencia: 90,
    },
  ]  */


  Editar(x:number){
    console.log(x)
  }

  numeroDeProducto=0;
  GetNumber(x:any){
    // console.log(this.datos_recibidos) //son los datos de edit [{}{}]
    console.log(x)

    this.numeroDeProducto=x

    return this.numeroDeProducto
  }




  ////////////
  

}

