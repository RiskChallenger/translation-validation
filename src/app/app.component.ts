import { Component, inject } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoDirective, TranslocoService } from '@ngneat/transloco';
import { NgxTvModule } from 'ngx-translation-validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TranslocoDirective, FormsModule, NgxTvModule, ReactiveFormsModule],
})
export class AppComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly transloco = inject(TranslocoService);

  protected readonly formOnSubmit = this.formBuilder.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', [Validators.required, Validators.maxLength(12)]],
    },
    {
      updateOn: 'submit',
    },
  );

  protected readonly formOnBlur = this.formBuilder.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', [Validators.required, Validators.maxLength(12)]],
    },
    {
      updateOn: 'blur',
    },
  );

  protected readonly formOnChange = this.formBuilder.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', [Validators.required, Validators.maxLength(12)]],
    },
    {
      updateOn: 'change',
    },
  );

  protected onSubmit(): void {
    // Intentionally left blank to trigger validation
  }

  protected changeLang(locale: 'nl' | 'en'): void {
    this.transloco.setActiveLang(locale);
  }
}
