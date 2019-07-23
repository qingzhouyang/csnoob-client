import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinItemListComponent } from './skin-item-list.component';

describe('SkinItemListComponent', () => {
  let component: SkinItemListComponent;
  let fixture: ComponentFixture<SkinItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
