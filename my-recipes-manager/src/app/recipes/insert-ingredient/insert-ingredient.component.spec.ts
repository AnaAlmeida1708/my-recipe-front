import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertIngredientComponent } from './insert-ingredient.component';

describe('InsertIngredientComponent', () => {
  let component: InsertIngredientComponent;
  let fixture: ComponentFixture<InsertIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
