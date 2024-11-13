import {Translation, TranslocoLoader} from "@ngneat/transloco";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    public getTranslation(lang: string): Observable<Translation> {
        return this.http.get<Translation>(`./assets/i18n/${lang}.json`);
    }
}
