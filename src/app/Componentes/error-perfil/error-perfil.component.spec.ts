import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPerfilComponent } from './error-perfil.component';

describe('ErrorPerfilComponent', () => {
  let component: ErrorPerfilComponent;
  let fixture: ComponentFixture<ErrorPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
