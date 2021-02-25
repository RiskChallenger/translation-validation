import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngxTvContainer]',
})
export class NgxTvContainerDirective {
  constructor(public vcr: ViewContainerRef) {}
}
