import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {



//lo mismo de tabla.ts
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





  // //RECIBE DATOS DEL PADRE 
  // @Input() datos_recibidos: Array<any> =[];



  //aqui 
/*   productos = [
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

  ] */

  // Recibir parametros de otros componentes
  // constructor(private rutaActiva: ActivatedRoute){}

  // Variable para recibir el parametro id enviado desde vistafull
  // cat = this.rutaActiva.snapshot.params['id'];

  // filteredData = this.productos.filter((item)=>item.Codigo === this.cat)




/////////////

/* 
constructor(
  private rutaActiva: ActivatedRoute,
  private dataService: DataService
) {} */

// Variable para recibir el parametro enviado desde vistafull
// cat = this.rutaActiva.snapshot.params['id'];

// filteredData = this.datos.filter((item) => item.Pais === this.cat);

productos: any[] = [];

/* ngOnInit() {
  this.dataArray = this.dataService.filterData(this.cat);
} :: no filtramos, creo*/




}
