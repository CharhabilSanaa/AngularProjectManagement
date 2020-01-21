import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionsViewComponent } from './reunions-view.component';

describe('ReunionsViewComponent', () => {
  let component: ReunionsViewComponent;
  let fixture: ComponentFixture<ReunionsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReunionsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
