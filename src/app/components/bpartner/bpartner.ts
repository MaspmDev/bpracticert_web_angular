import { Component } from '@angular/core';

@Component({
  selector: 'app-bpartner',
  imports: [],
  templateUrl: './bpartner.html',
  styleUrl: './bpartner.css',
})
export class Bpartner {
  ngAfterViewInit() {
  const elements = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}
}
