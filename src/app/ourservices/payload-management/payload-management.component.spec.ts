import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadManagementComponent } from './payload-management.component';

describe('PayloadManagementComponent', () => {
  let component: PayloadManagementComponent;
  let fixture: ComponentFixture<PayloadManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayloadManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayloadManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
