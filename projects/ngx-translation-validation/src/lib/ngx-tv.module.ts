import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { NgxTvContainerDirective } from './ngx-tv-container.directive';
import { NgxTvContainerComponent } from './ngx-tv-container/ngx-tv-container.component';
import { NgxTvFormDirective } from './ngx-tv-form.directive';
import { NgxTvScopeDirective } from './ngx-tv-scope.directive';
import { NgxTvConfig } from './ngx-tv.config';
import { NgxTvDirective } from './ngx-tv.directive';
import { provideNgxTv } from './ngx-tv.providers';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    NgxTvDirective,
    NgxTvFormDirective,
    NgxTvContainerComponent,
    NgxTvContainerDirective,
    NgxTvScopeDirective,
  ],
  exports: [NgxTvDirective, NgxTvFormDirective, NgxTvContainerComponent, NgxTvContainerDirective, NgxTvScopeDirective],
})
export class NgxTvModule {
  static forRoot(config?: Partial<NgxTvConfig>): ModuleWithProviders<NgxTvModule> {
    return {
      ngModule: NgxTvModule,
      providers: [provideNgxTv(config)],
    };
  }

  static forChild(): ModuleWithProviders<NgxTvModule> {
    return {
      ngModule: NgxTvModule,
    };
  }
}
