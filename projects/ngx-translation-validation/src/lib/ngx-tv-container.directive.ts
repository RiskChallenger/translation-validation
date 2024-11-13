import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ngxTvContainer]',
  standalone: true,
})
export class NgxTvContainerDirective {
  constructor(public vcr: ViewContainerRef) {}
}
