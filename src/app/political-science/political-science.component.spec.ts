import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalScienceComponent } from './political-science.component';

describe('PoliticalScienceComponent', () => {
  let component: PoliticalScienceComponent;
  let fixture: ComponentFixture<PoliticalScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticalScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
