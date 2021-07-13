import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  constructor(private formBuilder: FormBuilder, private transloco: TranslocoService) {}

  onSubmit(): void {}

  changeLang(locale: 'nl' | 'en'): void {
    this.transloco.setActiveLang(locale);
  }
}
