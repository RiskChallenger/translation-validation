import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';

export function getTranslocoTestingModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { tk: {} },
    translocoConfig: {
      availableLangs: ['tk'],
      defaultLang: 'tk',
    },
    preloadLangs: true,
    ...options,
  });
}
