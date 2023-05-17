import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundJuegoComponent } from './not-found-juego.component';

describe('NotFoundJuegoComponent', () => {
  let component: NotFoundJuegoComponent;
  let fixture: ComponentFixture<NotFoundJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundJuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
