import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShoesComponent } from './list-shoes.component';

describe('ListShoesComponent', () => {
  let component: ListShoesComponent;
  let fixture: ComponentFixture<ListShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListShoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
