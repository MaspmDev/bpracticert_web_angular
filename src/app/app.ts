import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Home } from "./components/home/home";
import { Footer } from "./components/footer/footer";
import { Bpartner } from "./components/bpartner/bpartner";
import { Carrucel } from "./components/carrucel/carrucel";
import { Header } from "./components/header/header";
import { Contacto } from "./components/contacto/contacto";
import { Certificaciones } from "./components/certificaciones/certificaciones";
import { Nosotros } from './components/nosotros/nosotros';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Home, Footer, Bpartner, Carrucel, Header, Contacto, Certificaciones, Nosotros],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'BPracticerT Website';
}