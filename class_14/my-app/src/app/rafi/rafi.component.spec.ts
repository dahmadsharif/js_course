import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RafiComponent } from './rafi.component';

describe('RafiComponent', () => {
  let component: RafiComponent;
  let fixture: ComponentFixture<RafiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RafiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RafiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
