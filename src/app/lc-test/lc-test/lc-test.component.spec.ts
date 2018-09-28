import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcTestComponent } from './lc-test.component';

describe('LcTestComponent', () => {
  let component: LcTestComponent;
  let fixture: ComponentFixture<LcTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
