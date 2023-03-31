import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {Router} from "@angular/router";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ LoginComponent ],
      providers: [ AuthService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in user and redirect to home page', fakeAsync(() => {
    const emailInput = fixture.debugElement.query(By.css('#email'));
    const passwordInput = fixture.debugElement.query(By.css('#password'));
    const submitButton = fixture.debugElement.query(By.css('#submit-button'));

    const testEmail = 'testuser@example.com';
    const testPassword = 'testpassword';

    spyOn(authService, 'login').and.returnValue(
      of({ token: 'fake-jwt-token' })
    );

    spyOn(router, 'navigateByUrl');

    emailInput.nativeElement.value = testEmail;
    passwordInput.nativeElement.value = testPassword;

    emailInput.nativeElement.dispatchEvent(new Event('input'));
    passwordInput.nativeElement.dispatchEvent(new Event('input'));

    submitButton.nativeElement.click();

    tick();

    expect(authService.login).toHaveBeenCalledWith(testEmail, testPassword);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  }));
});

