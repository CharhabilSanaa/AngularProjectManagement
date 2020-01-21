import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsViewComponent } from './projets-view.component';

describe('ProjetsViewComponent', () => {
  let component: ProjetsViewComponent;
  let fixture: ComponentFixture<ProjetsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
