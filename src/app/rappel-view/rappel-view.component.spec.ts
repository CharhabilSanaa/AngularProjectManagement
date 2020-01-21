import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappelViewComponent } from './rappel-view.component';

describe('RappelViewComponent', () => {
  let component: RappelViewComponent;
  let fixture: ComponentFixture<RappelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RappelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
