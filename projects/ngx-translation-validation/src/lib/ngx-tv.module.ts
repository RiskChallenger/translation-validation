import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ProviderScope, provideTranslocoScope, TranslocoModule } from '@jsverse/transloco';
import { NgxTvContainerDirective } from './ngx-tv-container.directive';
import { NgxTvContainerComponent } from './ngx-tv-container/ngx-tv-container.component';
import { NgxTvFormDirective } from './ngx-tv-form.directive';
import { NgxTvScopeDirective } from './ngx-tv-scope.directive';
import { getConfig, NGX_TV_CONFIG, NGX_TV_TRANSLOCO_SCOPE, NgxTvConfig } from './ngx-tv.config';
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
    const translocoScope: ProviderScope = {
      scope: getConfig(config).type,
    };

    return {
      ngModule: NgxTvModule,
      providers: [
        {
          provide: NGX_TV_CONFIG,
          useValue: getConfig(config),
        },
        {
          provide: NGX_TV_TRANSLOCO_SCOPE,
          useValue: translocoScope,
        },
        provideTranslocoScope(translocoScope),
      ],
    };
  }

  static forChild(): ModuleWithProviders<NgxTvModule> {
    return {
      ngModule: NgxTvModule,
    };
  }
}
