import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantCorreoComponent } from './plant-correo.component';

describe('PlantCorreoComponent', () => {
  let component: PlantCorreoComponent;
  let fixture: ComponentFixture<PlantCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantCorreoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
