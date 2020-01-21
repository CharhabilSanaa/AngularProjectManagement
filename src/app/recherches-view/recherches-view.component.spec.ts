import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchesViewComponent } from './recherches-view.component';

describe('RecherchesViewComponent', () => {
  let component: RecherchesViewComponent;
  let fixture: ComponentFixture<RecherchesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherchesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
