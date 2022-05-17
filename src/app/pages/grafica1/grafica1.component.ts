
import { Component } from '@angular/core';




@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1:string[]=['Casa','Perro','auto'];
  public data1=[
    [100,100,100],
  ]


  public labels2:string[]=['Auto','Moto','Barco'];
  public data2=[
    [200,100,300],
  ]

}

