import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTvModule } from 'ngx-translation-validation';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslocoRootModule,
    NgxTvModule.forRoot({
      type: 'validation',
      invalidClass: 'invalid-input',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
