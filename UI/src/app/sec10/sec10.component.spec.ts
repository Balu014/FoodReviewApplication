import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec10Component } from './sec10.component';

describe('Sec10Component', () => {
  let component: Sec10Component;
  let fixture: ComponentFixture<Sec10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
