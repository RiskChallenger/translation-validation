import { TranslocoTestingModule, TranslocoTestingOptions } from '@ngneat/transloco';

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
