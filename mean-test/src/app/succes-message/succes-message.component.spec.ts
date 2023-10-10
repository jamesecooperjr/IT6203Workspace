import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesMessageComponent } from './succes-message.component';

describe('SuccesMessageComponent', () => {
  let component: SuccesMessageComponent;
  let fixture: ComponentFixture<SuccesMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccesMessageComponent]
    });
    fixture = TestBed.createComponent(SuccesMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
