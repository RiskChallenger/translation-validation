import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { HashMap, translateSignal } from '@jsverse/transloco';
import { NGX_TV_TRANSLOCO_SCOPE } from '../ngx-tv.config';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngx-tv-container',
  templateUrl: './ngx-tv-container.component.html',
  styleUrls: ['./ngx-tv-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true, // Keep property present for backwards compatibility.
})
export class NgxTvContainerComponent {
  private readonly scope = inject(NGX_TV_TRANSLOCO_SCOPE);

  public parameters = input<HashMap | undefined>(undefined);
  public text = input<string, string | null>('', {
    transform: (v) => v ?? '',
  });

  protected translatedText = translateSignal(this.text, this.parameters, this.scope);
  protected hide = computed(() => this.text().length === 0);
}
