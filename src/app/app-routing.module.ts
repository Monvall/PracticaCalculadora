import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculadoraComponent} from "./calculadora/calculadora.component";
import {practica1Component} from "./practica1/practica1.component";

const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'practica1', component: practica1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
