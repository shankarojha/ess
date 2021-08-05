import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedSecurityComponent } from './integrated-security.component';

describe('IntegratedSecurityComponent', () => {
  let component: IntegratedSecurityComponent;
  let fixture: ComponentFixture<IntegratedSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegratedSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegratedSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
