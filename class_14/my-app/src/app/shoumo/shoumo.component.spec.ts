import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoumoComponent } from './shoumo.component';

describe('ShoumoComponent', () => {
  let component: ShoumoComponent;
  let fixture: ComponentFixture<ShoumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
