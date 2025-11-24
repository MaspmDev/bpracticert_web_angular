import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacionDetalle } from './certificacion-detalle';

describe('CertificacionDetalle', () => {
  let component: CertificacionDetalle;
  let fixture: ComponentFixture<CertificacionDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificacionDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificacionDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
