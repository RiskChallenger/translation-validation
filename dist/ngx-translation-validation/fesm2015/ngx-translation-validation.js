import { Directive, ViewContainerRef, ElementRef, Input, InjectionToken, ComponentFactoryResolver, Self, Inject, Optional, Host, Component, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';
import { EMPTY, fromEvent, merge } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

class NgxTvContainerDirective {
    constructor(vcr) {
        this.vcr = vcr;
    }
}
NgxTvContainerDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[ngxTvContainer]',
            },] }
];
NgxTvContainerDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];

class NgxTvFormDirective {
    constructor(host, hostFormGroup) {
        this.host = host;
        this.hostFormGroup = hostFormGroup;
        this.submit$ = this.hostFormGroup.ngSubmit;
    }
    get onBlur() {
        return this.hostFormGroup.form.updateOn === 'blur';
    }
    get onSubmit() {
        return this.hostFormGroup.form.updateOn === 'submit';
    }
    get element() {
        return this.host.nativeElement;
    }
}
NgxTvFormDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[formGroup]',
            },] }
];
NgxTvFormDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: FormGroupDirective }
];

class NgxTvScopeDirective {
    set ngxTvScope(scope) {
        this._scope = scope;
    }
    get scope() {
        return this._scope;
    }
}
NgxTvScopeDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[ngxTvScope]',
            },] }
];
NgxTvScopeDirective.propDecorators = {
    ngxTvScope: [{ type: Input }]
};

const NGX_TV_CONFIG = new InjectionToken('NGX_TV_CONFIG');

class NgxTvDirective {
    constructor(host, vcr, resolver, controlDir, config, controlErrorContainer, controlErrorContext, form) {
        this.host = host;
        this.vcr = vcr;
        this.resolver = resolver;
        this.controlDir = controlDir;
        this.config = config;
        this.controlErrorContainer = controlErrorContainer;
        this.controlErrorContext = controlErrorContext;
        this.form = form;
    }
    get element() {
        return this.host.nativeElement;
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g;
        this.submit$ = (_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.submit$.pipe(tap(() => {
            this.addSubmittedClass();
        }))) !== null && _b !== void 0 ? _b : EMPTY;
        this.blur$ = !((_c = this.form) === null || _c === void 0 ? void 0 : _c.onSubmit) ? fromEvent(this.element, 'blur').pipe(shareReplay(1)) : EMPTY;
        this.container = (_e = (_d = this.controlErrorContainer) === null || _d === void 0 ? void 0 : _d.vcr) !== null && _e !== void 0 ? _e : this.vcr;
        this.context = (_g = (_f = this.controlErrorContext) === null || _f === void 0 ? void 0 : _f.scope) !== null && _g !== void 0 ? _g : 'general';
        this.statusChangesObservable = merge(this.submit$, this.blur$, this.controlDir.statusChanges || EMPTY).subscribe(() => {
            const controlErrors = this.controlDir.errors;
            if (controlErrors) {
                const firstKey = Object.keys(controlErrors)[0];
                this.setError(`${this.config.scope}.${this.context}.${this.controlDir.name}.${firstKey}`);
            }
            else if (this.ref) {
                this.setError(null);
            }
        });
    }
    ngOnDestroy() {
        this.statusChangesObservable.unsubscribe();
    }
    addSubmittedClass() {
        var _a;
        if (this.config.submittedClass) {
            (_a = this.form) === null || _a === void 0 ? void 0 : _a.element.classList.add(this.config.submittedClass);
        }
    }
    addInvalidClass() {
        if (this.config.invalidClass) {
            this.host.nativeElement.classList.add(this.config.invalidClass);
        }
    }
    removeInvalidClass() {
        if (this.config.invalidClass) {
            this.host.nativeElement.classList.remove(this.config.invalidClass);
        }
    }
    setError(errorText) {
        if (!this.ref && errorText) {
            const factory = this.resolver.resolveComponentFactory(this.config.errorsComponent);
            this.ref = this.container.createComponent(factory);
            this.addInvalidClass();
        }
        if (this.ref) {
            this.ref.instance.text = errorText;
        }
        if (this.ref && errorText === null) {
            this.ref.destroy();
            this.removeInvalidClass();
            this.ref = undefined;
        }
    }
}
NgxTvDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[formControl], [formControlName]',
            },] }
];
NgxTvDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: NgControl, decorators: [{ type: Self }] },
    { type: undefined, decorators: [{ type: Inject, args: [NGX_TV_CONFIG,] }] },
    { type: NgxTvContainerDirective, decorators: [{ type: Optional }] },
    { type: NgxTvScopeDirective, decorators: [{ type: Optional }] },
    { type: NgxTvFormDirective, decorators: [{ type: Optional }, { type: Host }] }
];

class NgxTvContainerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.componentHide = true;
    }
    set text(value) {
        if (value !== this.componentText) {
            this.componentHide = !value;
            this.componentText = value || '';
            this.cdr.detectChanges();
        }
    }
}
NgxTvContainerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-tv-container',
                template: "<ng-container *transloco=\"let t\">\n  <p class=\"input-errors\" [class.hide]=\"componentHide\">\n    {{ t(componentText) }}\n  </p>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["form.submitted input.ng-invalid,input.ng-dirty.ng-invalid{border:1px solid red}"]
            },] }
];
NgxTvContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NgxTvContainerComponent.propDecorators = {
    text: [{ type: Input }]
};

function getConfig(config) {
    return Object.assign({ scope: 'validation', submittedClass: 'ng-submitted', errorsComponent: NgxTvContainerComponent, invalidClass: undefined }, config);
}
class NgxTvModule {
    static forRoot(config) {
        return {
            ngModule: NgxTvModule,
            providers: [
                {
                    provide: NGX_TV_CONFIG,
                    useValue: getConfig(config),
                },
                { provide: TRANSLOCO_SCOPE, useValue: getConfig(config).scope },
            ],
        };
    }
    static forChild() {
        return {
            ngModule: NgxTvModule,
        };
    }
}
NgxTvModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgxTvDirective,
                    NgxTvFormDirective,
                    NgxTvContainerComponent,
                    NgxTvContainerDirective,
                    NgxTvScopeDirective,
                ],
                imports: [CommonModule, TranslocoModule],
                exports: [NgxTvDirective, NgxTvFormDirective, NgxTvContainerComponent, NgxTvContainerDirective, NgxTvScopeDirective],
            },] }
];

/*
 * Public API Surface of ngx-translation-validation
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NGX_TV_CONFIG, NgxTvContainerComponent, NgxTvContainerDirective, NgxTvDirective, NgxTvFormDirective, NgxTvModule, NgxTvScopeDirective, getConfig };
//# sourceMappingURL=ngx-translation-validation.js.map
