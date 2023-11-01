import { Directive, ElementRef, Inject } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { NGX_TV_CONFIG, NgxTvConfig } from './ngx-tv.config';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[formGroup]',
})
export class NgxTvFormDirective {
  submit$ = this.hostFormGroup.ngSubmit;

  constructor(
    private host: ElementRef<HTMLFormElement>,
    private hostFormGroup: FormGroupDirective,
    @Inject(NGX_TV_CONFIG) private config: NgxTvConfig,
  ) {}

  get onBlur(): boolean {
    return this.hostFormGroup.form.updateOn === 'blur';
  }

  get onSubmit(): boolean {
    return this.hostFormGroup.form.updateOn === 'submit';
  }

  get element(): HTMLElement {
    return this.host.nativeElement;
  }

  public addSubmittedClass(): void {
    if (this.config.submittedClass) {
      this.element.classList.add(this.config.submittedClass);
    }
  }
}
