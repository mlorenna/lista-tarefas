import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddListComponent } from './modal-add-list.component';

describe('ModalAddListComponent', () => {
  let component: ModalAddListComponent;
  let fixture: ComponentFixture<ModalAddListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
