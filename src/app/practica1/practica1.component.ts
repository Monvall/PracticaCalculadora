import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculado',
  templateUrl: './practica1.component.html',
  styleUrls: ['./practica1.component.css']
})
export class practica1Component implements OnInit {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  constructor() {
  }

  ngOnInit(): void {}

  pressKey1(miVariable: any){
    this.num1 =+ miVariable.target.value;
  }

  pressKey2(miVariable: any){
    this.num2 =+ miVariable.target.value;
  }

  sum(){
    this.resultado = this.num1 + this.num2;
  }
}
