import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-localized-validation-messages';

  formOnSubmit = this.formBuilder.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
    },
    {
      updateOn: 'submit',
    }
  );

  formOnBlur = this.formBuilder.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
    },
    {
      updateOn: 'blur',
    }
  );

  formOnChange = this.formBuilder.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
    },
    {
      updateOn: 'change',
    }
  );

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {}
}
