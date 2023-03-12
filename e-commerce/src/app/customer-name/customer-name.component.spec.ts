import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNameComponent } from './customer-name.component';

describe('CustomerNameComponent', () => {
  let component: CustomerNameComponent;
  let fixture: ComponentFixture<CustomerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
