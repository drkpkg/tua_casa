import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('LoginComponent', () => {
  // login component test using supabase test data
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a onSubmit function', () => {
    expect(component.onSubmit).toBeTruthy();
  });

  it('should assign the email and password to the component', () => {
    component.formGroup.controls['email'].setValue('test@test.com');
    component.formGroup.controls['password'].setValue('test');
    expect(component.formGroup.controls['email'].value).toEqual('test@test.com');
    expect(component.formGroup.controls['password'].value).toEqual('test');
  });

  it('should call the onSubmit function', () => {
    spyOn(component, 'onSubmit');
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});

