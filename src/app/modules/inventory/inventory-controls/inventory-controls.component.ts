import { Component } from '@angular/core';
import { InventoryService } from '../../../shared/services/inventory.service';

@Component({
  selector: 'app-inventory-controls',
  templateUrl: 'inventory-controls.component.html',
  styleUrls: ['./inventory-controls.component.scss'],
})
export class InventoryControlsComponent {
 sizeValues = [
  {name: 'pequeño',alto:20, ancho:10, largo:10},
  {name: 'normal', alto: 25, ancho:20, largo:10},
  {name: 'medio', alto: 35, ancho:20, largo: 15},
  {name: 'grande', alto: 40, ancho:25, largo: 25},
];

name= '';
size = 'NO';
price = 0;

constructor(private inventoryService:InventoryService){
  
}

handleCreate() {
  
  if(this.name  === '' || this.name === undefined || this.size === 'NO' ){
    alert('Completa los campos debes seleccionar nombre y tamaño de tu producto ')
    return;
  }
  if(this.price === 0){
    alert('El precio debe ser mayor a 0');
    return;
  }
  const actualSize:any= this.sizeValues.filter(size => size.name === this.size);
  const {alto,ancho,largo} = actualSize[0];
  const objBD = {
    name: this.name,
    alto,
    ancho,
    largo,
    price:this.price
  }
  
  //TODO: service 
  this.inventoryService.createProduct(objBD);
  //TODO: render UI 

  this.name = '';
  this.size = 'NO';
  this.price = 0;

}

}
