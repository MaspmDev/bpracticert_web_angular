import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carrucel } from '../carrucel/carrucel';


@Component({
  selector: 'app-home',
  imports: [Carrucel, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
