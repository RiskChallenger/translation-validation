import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-localized-validation-messages';
  form = this.formBuilder.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
    },
    {
      updateOn: 'blur',
    }
  );

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    console.log('submitted shit bitch');
  }
}
