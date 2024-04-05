import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTwoComponent } from './add-two.component';

describe('AddTwoComponent', () => {
  let component: AddTwoComponent;
  let fixture: ComponentFixture<AddTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
