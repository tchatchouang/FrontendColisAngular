import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisRecuComponent } from './avis-recu.component';

describe('AvisRecuComponent', () => {
  let component: AvisRecuComponent;
  let fixture: ComponentFixture<AvisRecuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisRecuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisRecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
