import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinItemComponent } from './skin-item.component';

describe('SkinItemComponent', () => {
  let component: SkinItemComponent;
  let fixture: ComponentFixture<SkinItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
