import {
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
import { AbstractControl, FormArray, FormGroup, NgControl } from '@angular/forms';
import { EMPTY, fromEvent, merge, Observable, Subscription } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { NgxTvContainerDirective } from './ngx-tv-container.directive';
import { NgxTvContainerComponent } from './ngx-tv-container/ngx-tv-container.component';
import { NgxTvFormDirective } from './ngx-tv-form.directive';
import { NgxTvScopeDirective } from './ngx-tv-scope.directive';
import { NGX_TV_CONFIG, NgxTvConfig } from './ngx-tv.config';
import { ControlNameNotFoundError } from './ngx-tv.errors';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[formControl], [formControlName]',
  standalone: true,
})
export class NgxTvDirective implements OnInit, OnDestroy {
  ref?: ComponentRef<NgxTvContainerComponent>;
  submit$!: Observable<Event>;
  container!: ViewContainerRef;
  blur$!: Observable<Event>;
  scope: string | undefined;

  statusChangesObservable!: Subscription;

  constructor(
    private host: ElementRef<HTMLFormElement>,
    private vcr: ViewContainerRef,
    @Self() private controlDir: NgControl,
    @Inject(NGX_TV_CONFIG) private config: NgxTvConfig,
    @Optional() @Host() private controlErrorContainer?: NgxTvContainerDirective,
    @Optional() @Host() private controlErrorContext?: NgxTvScopeDirective,
    @Optional() @Host() private form?: NgxTvFormDirective,
  ) {}

  get element(): HTMLFormElement {
    return this.host.nativeElement;
  }

  ngOnInit(): void {
    this.submit$ =
      this.form?.submit$.pipe(
        tap(() => {
          this.form?.addSubmittedClass();
        }),
      ) ?? EMPTY;
    this.blur$ = !this.form?.onSubmit ? fromEvent(this.element, 'blur').pipe(shareReplay(1)) : EMPTY;
    this.container = this.controlErrorContainer?.vcr ?? this.vcr;
    this.scope = this.controlErrorContext?.scope ?? this.config.defaultScope;

    this.statusChangesObservable = merge(this.submit$, this.blur$, this.controlDir.statusChanges || EMPTY).subscribe(
      () => {
        this.controlDir.name ??= NgxTvDirective.findControlName(this.controlDir);
        const controlErrors = this.controlDir.errors;
        if (controlErrors) {
          const firstKey = Object.keys(controlErrors)[0];
          const parameters = controlErrors[firstKey];
          this.setError(`${this.scope}.${this.controlDir.name}.${firstKey}`, parameters);
        } else if (this.ref) {
          this.setError(null);
        }
      },
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

  private setError(errorText: string | null, parameters?: Record<string, number | string>): void {
    if (!this.ref && errorText) {
      this.ref = this.container.createComponent(this.config.errorsComponent);
      this.addInvalidClass();
    }

    if (this.ref && errorText) {
      this.ref.setInput('text', errorText);
      this.ref.setInput('parameters', parameters);
    }

    if (this.ref && errorText === null) {
      this.ref.destroy();
      this.removeInvalidClass();
      this.ref = undefined;
    }
  }

  private static findControlName(control: NgControl): string {
    if (control.name !== undefined && control.name !== null) {
      return String(control.name);
    }

    if (control.control === null) {
      throw new ControlNameNotFoundError('NgControl has no control');
    }

    const parent = control.control.parent;

    if (parent === null) {
      throw new ControlNameNotFoundError('Control is not part of a form group or form array');
    } else if (parent instanceof FormArray) {
      return NgxTvDirective.findArrayControlName(parent);
    } else {
      return NgxTvDirective.findGroupControlName(parent, control.control);
    }
  }

  private static findArrayControlName(control: FormArray): string {
    const parent = control.parent;

    if (parent === null) {
      throw new ControlNameNotFoundError('Control is not part of a form group');
    } else if (parent instanceof FormArray) {
      return NgxTvDirective.findArrayControlName(parent);
    } else {
      return NgxTvDirective.findGroupControlName(parent, control);
    }
  }

  private static findGroupControlName(group: FormGroup, control: AbstractControl): string {
    const groupControls = group.controls;
    const controlName = Object.keys(groupControls).find((key) => groupControls[key] === control);

    if (!controlName) {
      throw new ControlNameNotFoundError('Control cannot be found in supplied group');
    }

    return controlName;
  }
}
