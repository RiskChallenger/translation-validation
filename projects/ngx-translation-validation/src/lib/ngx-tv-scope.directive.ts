import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngxTvScope]',
})
export class NgxTvScopeDirective {
  // tslint:disable-next-line:variable-name
  private _scope?: string;

  @Input()
  set ngxTvScope(scope: string) {
    this._scope = scope;
  }

  get scope(): string | undefined {
    return this._scope;
  }
}
