import { InjectionToken, Type } from '@angular/core';
import { NgxTvContainerComponent } from './ngx-tv-container/ngx-tv-container.component';
import { ProviderScope } from '@jsverse/transloco';

export interface NgxTvConfig {
  type: string;
  defaultScope: string;
  invalidClass?: string;
  submittedClass: string;
  errorsComponent: Type<NgxTvContainerComponent>;
}

export const NGX_TV_CONFIG = new InjectionToken<NgxTvConfig>('NGX_TV_CONFIG');
export const NGX_TV_TRANSLOCO_SCOPE = new InjectionToken<ProviderScope>('NGX_TV_TRANSLOCO_SCOPE');

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
