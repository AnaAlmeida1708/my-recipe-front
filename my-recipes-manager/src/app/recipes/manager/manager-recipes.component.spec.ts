import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRecipesComponent } from './manager-recipes.component';

describe('ManagerRecipesComponent', () => {
  let component: ManagerRecipesComponent;
  let fixture: ComponentFixture<ManagerRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
