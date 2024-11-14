import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { HashMap, TranslocoDirective } from '@jsverse/transloco';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngx-tv-container',
  templateUrl: './ngx-tv-container.component.html',
  styleUrls: ['./ngx-tv-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoDirective],
})
export class NgxTvContainerComponent {
  componentText = '';
  componentHide = true;
  componentParameters?: HashMap;

  @Input() set text(value: string | null) {
    if (value !== this.componentText) {
      this.componentHide = !value;
      this.componentText = value || '';
      this.cdr.detectChanges();
    }
  }

  @Input() set parameters(value: Record<string, string | number> | undefined) {
    this.componentParameters = value;
    this.cdr.detectChanges();
  }

  constructor(private cdr: ChangeDetectorRef) {}
}
