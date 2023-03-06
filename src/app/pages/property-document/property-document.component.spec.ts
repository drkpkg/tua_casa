import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDocumentComponent } from './property-document.component';

describe('PropertyDocumentComponent', () => {
  let component: PropertyDocumentComponent;
  let fixture: ComponentFixture<PropertyDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
