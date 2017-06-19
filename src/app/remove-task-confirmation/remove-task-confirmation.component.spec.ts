import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTaskConfirmationComponent } from './remove-task-confirmation.component';

describe('RemoveTaskConfirmationComponent', () => {
  let component: RemoveTaskConfirmationComponent;
  let fixture: ComponentFixture<RemoveTaskConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveTaskConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTaskConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
