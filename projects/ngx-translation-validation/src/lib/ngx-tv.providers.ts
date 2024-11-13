import { NGX_TV_CONFIG, NgxTvConfig } from './ngx-tv.config';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideTranslocoScope } from '@ngneat/transloco';
import { getConfig } from './ngx-tv.config';

export function provideNgxTv(config?: Partial<NgxTvConfig>): EnvironmentProviders[] {
  return [makeEnvironmentProviders([provideTranslocoScope(getConfig(config).type)]), provideNgxTvConfig(config ?? {})];
}

export function provideNgxTvConfig(config: Partial<NgxTvConfig>) {
  return makeEnvironmentProviders([
    {
      provide: NGX_TV_CONFIG,
      useValue: getConfig(config),
    },
  ]);
}
