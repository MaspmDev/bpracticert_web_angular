import { Routes } from '@angular/router';
import { Home } from "./components/home/home";
import { Bpartner } from "./components/bpartner/bpartner";
import { Contacto } from "./components/contacto/contacto";
import { Certificaciones } from "./components/certificaciones/certificaciones";
import { Nosotros } from './components/nosotros/nosotros';
import { Carrucel } from './components/carrucel/carrucel';
import { CertificacionDetalle } from './components/certificacion-detalle/certificacion-detalle';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'nosotros', component: Nosotros },
  { path: 'certificaciones', component: Certificaciones },
  { path: 'bpartner', component: Bpartner },
  { path: 'contacto', component: Contacto},
  { path: 'carrucel', component: Carrucel},
  { path: 'certificacion/:id', component: CertificacionDetalle },
  { path: '**', redirectTo: '/home' }
];
