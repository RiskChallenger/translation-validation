import { fakeAsync, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { getTranslocoTestingModule } from './test/transloco-testing.module';
import { provideNgxTv } from 'ngx-translation-validation';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, getTranslocoTestingModule()],
      providers: [provideNgxTv()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  (['formOnSubmit', 'formOnBlur', 'formOnChange'] as const).forEach((formName) => {
    it(`should have as have a form: ${formName}`, fakeAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app[formName]).toBeTruthy();
    }));
  });

  it('should render title', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Example translation validation');
  }));

  describe('validation', () => {
    it('should show a validation error', fakeAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.input-errors')).toBeNull();

      const submitForm = fixture.nativeElement.querySelector('form[ngxtvscope=submit]');
      submitForm.querySelector('button').click();

      expect(submitForm.querySelector('.input-errors')).not.toBeNull();

      expect(
        submitForm.querySelector('.form-group:has(input[formcontrolname=name]) .input-errors').textContent,
      ).toContain('Submit name is required');

      expect(submitForm.querySelector('.form-group:has(input[formcontrolname=email]) .input-errors')).toBeNull();

      expect(
        submitForm.querySelector('.form-group:has(input[formcontrolname=phone]) .input-errors').textContent,
      ).toContain('Submit phone is required');
    }));
  });
});
