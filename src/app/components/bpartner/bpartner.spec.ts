import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bpartner } from './bpartner';

describe('Bpartner', () => {
  let component: Bpartner;
  let fixture: ComponentFixture<Bpartner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bpartner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bpartner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
