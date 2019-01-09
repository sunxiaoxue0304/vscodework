import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbkeComponent } from './tbke.component';

describe('TbkeComponent', () => {
  let component: TbkeComponent;
  let fixture: ComponentFixture<TbkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
