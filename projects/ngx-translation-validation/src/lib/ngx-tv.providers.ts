import { NGX_TV_CONFIG, NGX_TV_TRANSLOCO_SCOPE, NgxTvConfig } from './ngx-tv.config';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';
import { getConfig } from './ngx-tv.config';

export function provideNgxTv(config?: Partial<NgxTvConfig>): EnvironmentProviders[] {
  return [provideNgxTvConfig(config ?? {}), provideNgxTvTranslationScope(config ?? {})];
}

export function provideNgxTvConfig(config: Partial<NgxTvConfig>) {
  return makeEnvironmentProviders([
    {
      provide: NGX_TV_CONFIG,
      useValue: getConfig(config),
    },
  ]);
}

export function provideNgxTvTranslationScope(config: Partial<NgxTvConfig>) {
  const translocoScope = { scope: getConfig(config).type };
  return makeEnvironmentProviders([
    provideTranslocoScope(translocoScope),
    { provide: NGX_TV_TRANSLOCO_SCOPE, useValue: translocoScope },
  ]);
}
