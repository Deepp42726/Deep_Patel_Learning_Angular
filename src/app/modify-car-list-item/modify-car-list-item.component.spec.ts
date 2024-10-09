import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCarListItemComponent } from './modify-car-list-item.component';

describe('ModifyCarListItemComponent', () => {
  let component: ModifyCarListItemComponent;
  let fixture: ComponentFixture<ModifyCarListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyCarListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyCarListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
