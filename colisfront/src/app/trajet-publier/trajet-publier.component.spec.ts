import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetPublierComponent } from './trajet-publier.component';

describe('TrajetPublierComponent', () => {
  let component: TrajetPublierComponent;
  let fixture: ComponentFixture<TrajetPublierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetPublierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetPublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
