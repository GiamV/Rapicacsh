import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolComponent } from './edit-rol.component';
import { HttpClientModule } from '@angular/common/http';

describe('EditRolComponent', () => {
  let component: EditRolComponent;
  let fixture: ComponentFixture<EditRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientModule ] ,
      declarations: [ EditRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
