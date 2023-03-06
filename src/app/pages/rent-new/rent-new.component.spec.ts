import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentNewComponent } from './rent-new.component';

describe('RentNewComponent', () => {
  let component: RentNewComponent;
  let fixture: ComponentFixture<RentNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
