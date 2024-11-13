import {
    TranslocoTestingModule,
    TranslocoTestingOptions,
} from '@ngneat/transloco';
import en from '../../assets/i18n/en.json';
import nl from '../../assets/i18n/nl.json';
import enValidation from '../../assets/i18n/validation/en.json'
import nlValidation from '../../assets/i18n/validation/nl.json'

export function getTranslocoTestingModule(options: TranslocoTestingOptions = {}) {
    return TranslocoTestingModule.forRoot({
        langs: { en, nl, 'validation/en': enValidation, 'validation/nl': nlValidation },
        translocoConfig: {
            availableLangs: ['en', 'nl'],
            defaultLang: 'en',
        },
        preloadLangs: true,
        ...options,
    });
}
