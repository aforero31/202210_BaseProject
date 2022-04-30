import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  marcas:string[] = ['Renault','Chevrolet','Nissan'];
  cantidad:number[] = [0,0,0];

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }

  estadistica(): void{
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;

      for(let index = 0; index <= this.vehiculos.length; index++){
        let vehiculo: Vehiculo = this.vehiculos[index];
        if(vehiculo.marca=='Renault'){
          this.cantidad[0]=this.cantidad[0]+1;
        }
        if(vehiculo.marca=='Chevrolet'){
          this.cantidad[1]=this.cantidad[1]+1;
        }
        if(vehiculo.marca=='Nissan'){
          this.cantidad[2]=this.cantidad[2]+1;
        }
      }

    });

  }


  ngOnInit() {
    this.getVehiculos();
    this.estadistica();
  }

}
