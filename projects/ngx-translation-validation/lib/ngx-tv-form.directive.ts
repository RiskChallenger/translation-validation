import { Directive, ElementRef, EventEmitter, Self } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective, NgControl, NgForm, NgModelGroup } from '@angular/forms';
import { EMPTY, fromEvent, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formGroup]',
})
export class NgxTvFormDirective {
  submit$ = this.hostFormGroup.ngSubmit;

  constructor(private host: ElementRef<HTMLFormElement>, private hostFormGroup: FormGroupDirective) {}

  get onBlur(): boolean {
    return this.hostFormGroup.form.updateOn === 'blur';
  }
  get onSubmit(): boolean {
    return this.hostFormGroup.form.updateOn === 'submit';
  }
  get element(): HTMLElement {
    return this.host.nativeElement;
  }
}
