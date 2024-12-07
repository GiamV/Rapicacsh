import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetProductComponent } from './det-product.component';

describe('DetProductComponent', () => {
  let component: DetProductComponent;
  let fixture: ComponentFixture<DetProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
