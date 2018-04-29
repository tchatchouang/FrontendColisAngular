import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposeTrajetComponent } from './propose-trajet.component';

describe('ProposeTrajetComponent', () => {
  let component: ProposeTrajetComponent;
  let fixture: ComponentFixture<ProposeTrajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposeTrajetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposeTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
