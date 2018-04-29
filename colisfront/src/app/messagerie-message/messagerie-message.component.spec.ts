import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieMessageComponent } from './messagerie-message.component';

describe('MessagerieMessageComponent', () => {
  let component: MessagerieMessageComponent;
  let fixture: ComponentFixture<MessagerieMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagerieMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagerieMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
