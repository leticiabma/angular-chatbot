import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedChatComponent } from './fixed-chat.component';

describe('FixedChatComponent', () => {
  let component: FixedChatComponent;
  let fixture: ComponentFixture<FixedChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
