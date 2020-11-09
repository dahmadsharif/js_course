import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JabedComponent } from './jabed.component';

describe('JabedComponent', () => {
  let component: JabedComponent;
  let fixture: ComponentFixture<JabedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JabedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JabedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
