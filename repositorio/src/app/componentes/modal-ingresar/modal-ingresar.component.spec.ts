import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIngresarComponent } from './modal-ingresar.component';

describe('ModalIngresarComponent', () => {
  let component: ModalIngresarComponent;
  let fixture: ComponentFixture<ModalIngresarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalIngresarComponent]
    });
    fixture = TestBed.createComponent(ModalIngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
