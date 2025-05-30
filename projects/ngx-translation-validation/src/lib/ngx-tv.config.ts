import { InjectionToken, Type } from '@angular/core';
import { NgxTvContainerComponent } from './ngx-tv-container/ngx-tv-container.component';

export interface NgxTvConfig {
  type: string;
  defaultScope: string;
  invalidClass?: string;
  submittedClass: string;
  errorsComponent: Type<NgxTvContainerComponent>;
}

export const NGX_TV_CONFIG = new InjectionToken('NGX_TV_CONFIG');

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
