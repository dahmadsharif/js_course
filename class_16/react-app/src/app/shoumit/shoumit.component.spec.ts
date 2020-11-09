import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoumitComponent } from './shoumit.component';

describe('ShoumitComponent', () => {
  let component: ShoumitComponent;
  let fixture: ComponentFixture<ShoumitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoumitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoumitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
