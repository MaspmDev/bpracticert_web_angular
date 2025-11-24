import { Component } from '@angular/core';
import { Carrucel } from '../carrucel/carrucel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificaciones',
  standalone: true,
  imports: [ CommonModule, Carrucel],
  templateUrl: './certificaciones.html',
  styleUrl: './certificaciones.css',
})
export class Certificaciones {

}
