import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VavbarComponent } from './vavbar.component';

describe('VavbarComponent', () => {
  let component: VavbarComponent;
  let fixture: ComponentFixture<VavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
