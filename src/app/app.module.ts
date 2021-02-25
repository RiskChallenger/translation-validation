import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTvModule } from 'ngx-translation-validation';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { SomeErrorContainerComponent } from './some-error-container/some-error-container.component';

@NgModule({
  declarations: [AppComponent, SomeErrorContainerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslocoRootModule,
    NgxTvModule.forRoot({
      scope: 'validation',
      invalidClass: 'invalid-input',
      errorsComponent: SomeErrorContainerComponent,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
