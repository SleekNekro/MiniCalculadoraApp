import { Component } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  template: '<app-calculadora></app-calculadora>',
  imports: [CommonModule, CalculadoraComponent]
})
export class AppComponent { }
