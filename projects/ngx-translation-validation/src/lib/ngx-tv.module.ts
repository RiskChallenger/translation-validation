import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { NgxTvContainerDirective } from './ngx-tv-container.directive';
import { NgxTvContainerComponent } from './ngx-tv-container/ngx-tv-container.component';
import { NgxTvFormDirective } from './ngx-tv-form.directive';
import { NgxTvScopeDirective } from './ngx-tv-scope.directive';
import { NGX_TV_CONFIG, NgxTvConfig } from './ngx-tv.config';
import { NgxTvDirective } from './ngx-tv.directive';

export function getConfig(config?: Partial<NgxTvConfig>): NgxTvConfig {
  return {
    type: 'validation',
    defaultScope: 'general',
    submittedClass: 'ng-submitted',
    errorsComponent: NgxTvContainerComponent,
    invalidClass: undefined,
    ...config,
  };
}

@NgModule({
  declarations: [
    NgxTvDirective,
    NgxTvFormDirective,
    NgxTvContainerComponent,
    NgxTvContainerDirective,
    NgxTvScopeDirective,
  ],
  imports: [CommonModule, TranslocoModule],
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
        { provide: TRANSLOCO_SCOPE, useValue: getConfig(config).type },
      ],
    };
  }

  static forChild(): ModuleWithProviders<NgxTvModule> {
    return {
      ngModule: NgxTvModule,
    };
  }
}
