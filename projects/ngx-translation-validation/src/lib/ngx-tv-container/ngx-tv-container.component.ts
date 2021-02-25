import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-tv-container',
  templateUrl: './ngx-tv-container.component.html',
  styleUrls: ['./ngx-tv-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTvContainerComponent {
  componentText?: string;
  componentHide = true;

  @Input() set text(value: string | null) {
    if (value !== this.componentText) {
      this.componentHide = !value;
      this.componentText = value || '';
      this.cdr.detectChanges();
    }
  }

  constructor(private cdr: ChangeDetectorRef) {}
}
