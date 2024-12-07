import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProveeComponent } from './add-provee.component';

describe('AddProveeComponent', () => {
  let component: AddProveeComponent;
  let fixture: ComponentFixture<AddProveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProveeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
