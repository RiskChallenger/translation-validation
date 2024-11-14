import { importProvidersFrom, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { NgxTvModule, provideNgxTv } from 'ngx-translation-validation';
import { getTranslocoTestingModule } from './transloco-testing.module';

@NgModule({
  declarations: [],
  imports: [getTranslocoTestingModule()],
  providers: [
    provideNgxTv({
      type: 'validation',
      invalidClass: 'invalid-input',
    }),
    importProvidersFrom(FormsModule, ReactiveFormsModule),
  ],
  exports: [CommonModule, ReactiveFormsModule, TranslocoModule, NgxTvModule],
})
export class TestingModule {}
