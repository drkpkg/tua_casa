import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContractComponent } from './info-contract.component';

describe('InfoContractComponent', () => {
  let component: InfoContractComponent;
  let fixture: ComponentFixture<InfoContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
