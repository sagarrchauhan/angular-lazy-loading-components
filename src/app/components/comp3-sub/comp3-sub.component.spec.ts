import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3SubComponent } from './comp3-sub.component';

describe('Comp3SubComponent', () => {
  let component: Comp3SubComponent;
  let fixture: ComponentFixture<Comp3SubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3SubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
