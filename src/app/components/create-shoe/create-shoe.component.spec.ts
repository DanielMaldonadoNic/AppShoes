import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShoeComponent } from './create-shoe.component';

describe('CreateShoeComponent', () => {
  let component: CreateShoeComponent;
  let fixture: ComponentFixture<CreateShoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateShoeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
