import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  @Input()
  tituloARecibir: string = '';

  constructor() {
  }

  ngOnInit(): void {}

  sumameEsta(){
    this.resultado = this.num1 + this.num2;
  }

}
