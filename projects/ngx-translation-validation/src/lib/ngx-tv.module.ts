import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { provideTranslocoScope, TranslocoModule } from '@jsverse/transloco';
import { NgxTvContainerDirective } from './ngx-tv-container.directive';
import { NgxTvContainerComponent } from './ngx-tv-container/ngx-tv-container.component';
import { NgxTvFormDirective } from './ngx-tv-form.directive';
import { NgxTvScopeDirective } from './ngx-tv-scope.directive';
import { getConfig, NGX_TV_CONFIG, NgxTvConfig } from './ngx-tv.config';
import { NgxTvDirective } from './ngx-tv.directive';

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
      providers: [
        {
          provide: NGX_TV_CONFIG,
          useValue: getConfig(config),
        },
        provideTranslocoScope(getConfig(config).type),
      ],
    };
  }

  static forChild(): ModuleWithProviders<NgxTvModule> {
    return {
      ngModule: NgxTvModule,
    };
  }
}
