import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetDemanderComponent } from './trajet-demander.component';

describe('TrajetDemanderComponent', () => {
  let component: TrajetDemanderComponent;
  let fixture: ComponentFixture<TrajetDemanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetDemanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetDemanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
