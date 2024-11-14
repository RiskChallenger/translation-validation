import { Component, inject } from '@angular/core';
import { TestingModule } from '../testing.module';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: true,
  template: `
    <form [formGroup]="form">
      <input type="text" formControlName="name" />
    </form>
  `,
  imports: [TestingModule],
})
export class FormGroupNamedFormControlComponent {
  protected readonly formBuilder = inject(NonNullableFormBuilder);

  protected readonly form = this.formBuilder.group({
    name: ['', [Validators.required]],
  });
}

@Component({
  standalone: true,
  template: `
    <form [formGroup]="form">
      <input type="text" [formControl]="form.controls.name" />
    </form>
  `,
  imports: [TestingModule],
})
export class FormGroupFormControlComponent extends FormGroupNamedFormControlComponent {}
