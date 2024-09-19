import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRemindersComponent } from './dashboard-reminders.component';

describe('DashboardRemindersComponent', () => {
  let component: DashboardRemindersComponent;
  let fixture: ComponentFixture<DashboardRemindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardRemindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
