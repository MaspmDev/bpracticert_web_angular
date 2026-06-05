import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrucel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrucel.html',
  styleUrl: './carrucel.css',
})
export class Carrucel {
  @ViewChild('track') track!: ElementRef;
  currentIndex = 0;
  displayCerts: any[] = [];
  visibleCount = 3;
  transitionActive = true;
  autoplayInterval: any;

  certificaciones = [
    { id: 'apm', nombre: 'ADVANCED PROJECT MANAGER', costo: 290, imagen: 'assets/images/Carrucel/APM.png' },
    { id: 'spm', nombre: 'SKILLED PROJECT MANAGER', costo: 150, imagen: 'assets/images/Carrucel/SPM.png' },
    { id: 'smp', nombre: 'SCRUM MASTER PRACTITIONER', costo: 150, imagen: 'assets/images/Carrucel/SMP.png' },
    { id: 'spop', nombre: 'SCRUM PRODUCT OWNER PRACTITIONER', costo: 175, imagen: 'assets/images/Carrucel/SPOP.png' },
    { id: 'prmp', nombre: 'PROJECT RISK MANAGER PROFESSIONAL', costo: 150, imagen: 'assets/images/Carrucel/PRMP.PNG' },
    { id: 'bcdp', nombre: 'BUSINESS CASE DEVELOPMENT PROFESSIONAL', costo: 125, imagen: 'assets/images/Carrucel/BCDP.PNG' },
    { id: 'stmp', nombre: 'SCRUM TEAM MEMBER PRACTITIONER', costo: 125, imagen: 'assets/images/Carrucel/STMP.png' },
    { id: 'spp', nombre: 'SCHEDULE & PROJECT PRACTITIONER ', costo: 75, imagen: 'assets/images/Carrucel/SPP.png' },
    { id: 'bap', nombre: 'BUSINESS ANALYSIS PRACTITIONER', costo: 195, imagen: 'assets/images/Carrucel/BAP.PNG' },
    { id: 'cpat', nombre: 'COACHING PRACTICES FOR AGILE TEAMS', costo: 175, imagen: 'assets/images/Carrucel/CPAT.PNG' },
    { id: 'dtp', nombre: 'DESIGN THINKING PRACTITIONER', costo: 150, imagen: 'assets/images/Carrucel/DTP.PNG' },
    { id: 'kmp', nombre: 'KANBAN METHOD PRACTITIONER', costo: 150, imagen: 'assets/images/Carrucel/KMP.PNG' },
    { id: 'atp', nombre: 'AGILE THINKING PRACTITIONER', costo: 150, imagen: 'assets/images/Carrucel/ATP.PNG' },
    { id: 'pmop', nombre: 'PROFESSIONAL MANAGEMENT OFFICE PRACTITIONER', costo: 75, imagen: 'assets/images/Carrucel/PMOP.PNG' },
    { id: 'pmf', nombre: 'PROJECT MANAGEMENT FUNDAMENTALS', costo: 75, imagen: 'assets/images/Carrucel/PMF.PNG' },
    { id: 'aif', nombre: 'ARTIFICIAL INTELLIGENCE FUNDAMENTALS', costo: 75, imagen: 'assets/images/Carrucel/AIF.png' },
    { id: 'apm', nombre: 'ADVANCED PROJECT MANAGER', costo: 290, imagen: 'assets/images/Carrucel/APM.png' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateVisibleCount();
    this.displayCerts = [...this.certificaciones, ...this.certificaciones, ...this.certificaciones];
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.startAutoplay();
    });
  }

  @HostListener('window:resize')
  updateVisibleCount() {
    const w = window.innerWidth;
    if (w < 600) this.visibleCount = 1;
    else if (w < 1024) this.visibleCount = 2;
    else this.visibleCount = 3;

    requestAnimationFrame(() => {
      this.currentIndex = 0;
    });
  }

  getTransform(): string {
    if (!this.track) return 'translateX(0px)';

    const firstSlide = this.track.nativeElement.children[0];
    if (!firstSlide) return 'translateX(0px)';

    const slideWidth = firstSlide.getBoundingClientRect().width;
    const translateX = this.currentIndex * slideWidth;

    return `translateX(-${translateX}px)`;
  }

  nextSlide() {
    if (!this.transitionActive) return;
    this.currentIndex++;
    if (this.currentIndex >= this.certificaciones.length - this.visibleCount + 1) {
        this.currentIndex = 0;
    }
  }

  prevSlide() {
    if (!this.transitionActive) return;
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.certificaciones.length - this.visibleCount;
    }
  }

  verDetalle(id: string) {
    this.router.navigate(['/certificacion', id]);
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => this.nextSlide(), 4500);
  }

  stopAutoplay() {
    if (this.autoplayInterval) clearInterval(this.autoplayInterval);
  }

  onMouseEnter() { this.stopAutoplay(); }
  onMouseLeave() { this.startAutoplay(); }
}
