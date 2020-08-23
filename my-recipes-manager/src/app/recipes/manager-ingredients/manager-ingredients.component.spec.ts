import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerIngredientsComponent } from './manager-ingredients.component';

describe('ManagerIngredientsComponent', () => {
  let component: ManagerIngredientsComponent;
  let fixture: ComponentFixture<ManagerIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
