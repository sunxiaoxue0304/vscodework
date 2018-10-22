import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenwuComponent } from './renwu.component';

describe('RenwuComponent', () => {
  let component: RenwuComponent;
  let fixture: ComponentFixture<RenwuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenwuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
