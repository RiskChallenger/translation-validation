import { Directive, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ngxTvScope]',
  standalone: true,
})
export class NgxTvScopeDirective {
  private _scope?: string;

  @Input()
  set ngxTvScope(scope: string) {
    this._scope = scope;
  }

  get scope(): string | undefined {
    return this._scope;
  }
}
