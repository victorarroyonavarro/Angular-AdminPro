import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuario().then(lista=>{
      console.log(lista);
    })
  }

  getUsuario(){
    return new Promise(resolve=>{
      fetch('https://reqres.in/api/users')
      .then(resp=>resp.json())
      .then(body=>resolve(body.data))
    });



  }

}
