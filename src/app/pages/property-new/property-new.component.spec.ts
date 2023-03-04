import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyNewComponent } from './property-new.component';

describe('PropertyNewComponent', () => {
  let component: PropertyNewComponent;
  let fixture: ComponentFixture<PropertyNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
