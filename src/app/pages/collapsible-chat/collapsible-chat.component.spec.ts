import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleChatComponent } from './collapsible-chat.component';

describe('CollapsibleChatComponent', () => {
  let component: CollapsibleChatComponent;
  let fixture: ComponentFixture<CollapsibleChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsibleChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
