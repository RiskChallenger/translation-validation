import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Host,
  Inject,
  OnDestroy,
  OnInit,
  Optional,
  Self,
  ViewContainerRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { EMPTY, fromEvent, merge, Observable, Subscription } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { NgxTvContainerDirective } from './ngx-tv-container.directive';
import { NgxTvContainerComponent } from './ngx-tv-container/ngx-tv-container.component';
import { NgxTvFormDirective } from './ngx-tv-form.directive';
import { NgxTvScopeDirective } from './ngx-tv-scope.directive';
import { NGX_TV_CONFIG, NgxTvConfig } from './ngx-tv.config';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formControl], [formControlName]',
})
export class NgxTvDirective implements OnInit, OnDestroy {
  ref?: ComponentRef<NgxTvContainerComponent>;
  submit$!: Observable<Event>;
  container!: ViewContainerRef;
  blur$!: Observable<Event>;
  context: string | undefined;

  statusChangesObservable!: Subscription;

  constructor(
    private host: ElementRef<HTMLFormElement>,
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Self() private controlDir: NgControl,
    @Inject(NGX_TV_CONFIG) private config: NgxTvConfig,
    @Optional() @Host() private controlErrorContainer?: NgxTvContainerDirective,
    @Optional() @Host() private controlErrorContext?: NgxTvScopeDirective,
    @Optional() @Host() private form?: NgxTvFormDirective
  ) {}

  get element(): HTMLFormElement {
    return this.host.nativeElement;
  }

  ngOnInit(): void {
    this.submit$ =
      this.form?.submit$.pipe(
        tap(() => {
          this.form?.addSubmittedClass();
        })
      ) ?? EMPTY;
    this.blur$ = !this.form?.onSubmit ? fromEvent(this.element, 'blur').pipe(shareReplay(1)) : EMPTY;
    this.container = this.controlErrorContainer?.vcr ?? this.vcr;
    this.context = this.controlErrorContext?.scope ?? this.config.defaultScope;

    this.statusChangesObservable = merge(this.submit$, this.blur$, this.controlDir.statusChanges || EMPTY).subscribe(
      () => {
        const controlErrors = this.controlDir.errors;
        if (controlErrors) {
          const firstKey = Object.keys(controlErrors)[0];
          this.setError(`${this.config.type}.${this.context}.${this.controlDir.name}.${firstKey}`);
        } else if (this.ref) {
          this.setError(null);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.statusChangesObservable.unsubscribe();
  }

  addInvalidClass(): void {
    if (this.config.invalidClass) {
      this.host.nativeElement.classList.add(this.config.invalidClass);
    }
  }

  removeInvalidClass(): void {
    if (this.config.invalidClass) {
      this.host.nativeElement.classList.remove(this.config.invalidClass);
    }
  }

  private setError(errorText: string | null): void {
    if (!this.ref && errorText) {
      const factory = this.resolver.resolveComponentFactory(this.config.errorsComponent);
      this.ref = this.container.createComponent(factory);
      this.addInvalidClass();
    }

    if (this.ref && errorText) {
      this.ref.instance.text = errorText;
    }

    if (this.ref && errorText === null) {
      this.ref.destroy();
      this.removeInvalidClass();
      this.ref = undefined;
    }
  }
}
