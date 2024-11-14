import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxTvDirective } from 'ngx-translation-validation';
import { FormGroupFormControlComponent, FormGroupNamedFormControlComponent } from './test/components/form-group';
import Spy = jasmine.Spy;

describe('NgxTvDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGroupFormControlComponent, FormGroupNamedFormControlComponent],
    }).compileComponents();
  });

  describe('FormGroup', () => {
    [FormGroupNamedFormControlComponent, FormGroupFormControlComponent].forEach((component) => {
      describe(`with ${component.name} component`, () => {
        it('should create the test component', () => {
          const fixture = TestBed.createComponent(component);
          const app = fixture.componentInstance;
          expect(app).toBeTruthy();
        });

        it('should show a validation error', () => {
          const fixture = TestBed.createComponent(component);
          const inputElement = fixture.debugElement.query(By.directive(NgxTvDirective));
          const directive = inputElement.injector.get(NgxTvDirective);

          const setErrorSpy: Spy = spyOn(directive, <never>'setError').and.callThrough();

          fixture.detectChanges();

          expect(setErrorSpy).not.toHaveBeenCalled();
          expect(directive.ref).not.toBeDefined();

          inputElement.nativeElement.dispatchEvent(new Event('blur'));

          expect(setErrorSpy).toHaveBeenCalledOnceWith('validation.general.name.required', true);

          expect(directive.ref).toBeDefined();
          expect(fixture.nativeElement.textContent).toContain('validation.general.name.required');
        });

        it('should remove a validation error', () => {
          const fixture = TestBed.createComponent(component);
          const inputElement = fixture.debugElement.query(By.directive(NgxTvDirective));
          const directive = inputElement.injector.get(NgxTvDirective);

          const setErrorSpy: Spy = spyOn(directive, <never>'setError').and.callThrough();

          fixture.detectChanges();

          inputElement.nativeElement.dispatchEvent(new Event('blur'));

          expect(setErrorSpy).toHaveBeenCalled();

          setErrorSpy.calls.reset();

          fixture.componentInstance['form'].controls.name.setValue('test');
          fixture.detectChanges();
          inputElement.nativeElement.dispatchEvent(new Event('blur'));

          expect(setErrorSpy).toHaveBeenCalledWith(null);
          expect(directive.ref).not.toBeDefined();
          expect(fixture.nativeElement.textContent).not.toContain('validation.general.name.required');
        });
      });
    });
  });
});
