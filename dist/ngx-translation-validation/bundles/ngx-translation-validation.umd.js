(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@ngneat/transloco')) :
    typeof define === 'function' && define.amd ? define('ngx-translation-validation', ['exports', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators', '@angular/common', '@ngneat/transloco'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-translation-validation'] = {}, global.ng.core, global.ng.forms, global.rxjs, global.rxjs.operators, global.ng.common, global.transloco));
}(this, (function (exports, core, forms, rxjs, operators, common, transloco) { 'use strict';

    var NgxTvContainerDirective = /** @class */ (function () {
        function NgxTvContainerDirective(vcr) {
            this.vcr = vcr;
        }
        return NgxTvContainerDirective;
    }());
    NgxTvContainerDirective.decorators = [
        { type: core.Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[ngxTvContainer]',
                },] }
    ];
    NgxTvContainerDirective.ctorParameters = function () { return [
        { type: core.ViewContainerRef }
    ]; };

    var NgxTvFormDirective = /** @class */ (function () {
        function NgxTvFormDirective(host, hostFormGroup) {
            this.host = host;
            this.hostFormGroup = hostFormGroup;
            this.submit$ = this.hostFormGroup.ngSubmit;
        }
        Object.defineProperty(NgxTvFormDirective.prototype, "onBlur", {
            get: function () {
                return this.hostFormGroup.form.updateOn === 'blur';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxTvFormDirective.prototype, "onSubmit", {
            get: function () {
                return this.hostFormGroup.form.updateOn === 'submit';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxTvFormDirective.prototype, "element", {
            get: function () {
                return this.host.nativeElement;
            },
            enumerable: false,
            configurable: true
        });
        return NgxTvFormDirective;
    }());
    NgxTvFormDirective.decorators = [
        { type: core.Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[formGroup]',
                },] }
    ];
    NgxTvFormDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: forms.FormGroupDirective }
    ]; };

    var NgxTvScopeDirective = /** @class */ (function () {
        function NgxTvScopeDirective() {
        }
        Object.defineProperty(NgxTvScopeDirective.prototype, "ngxTvScope", {
            set: function (scope) {
                this._scope = scope;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxTvScopeDirective.prototype, "scope", {
            get: function () {
                return this._scope;
            },
            enumerable: false,
            configurable: true
        });
        return NgxTvScopeDirective;
    }());
    NgxTvScopeDirective.decorators = [
        { type: core.Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[ngxTvScope]',
                },] }
    ];
    NgxTvScopeDirective.propDecorators = {
        ngxTvScope: [{ type: core.Input }]
    };

    var NGX_TV_CONFIG = new core.InjectionToken('NGX_TV_CONFIG');

    var NgxTvDirective = /** @class */ (function () {
        function NgxTvDirective(host, vcr, resolver, controlDir, config, controlErrorContainer, controlErrorContext, form) {
            this.host = host;
            this.vcr = vcr;
            this.resolver = resolver;
            this.controlDir = controlDir;
            this.config = config;
            this.controlErrorContainer = controlErrorContainer;
            this.controlErrorContext = controlErrorContext;
            this.form = form;
        }
        Object.defineProperty(NgxTvDirective.prototype, "element", {
            get: function () {
                return this.host.nativeElement;
            },
            enumerable: false,
            configurable: true
        });
        NgxTvDirective.prototype.ngOnInit = function () {
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g;
            this.submit$ = (_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.submit$.pipe(operators.tap(function () {
                _this.addSubmittedClass();
            }))) !== null && _b !== void 0 ? _b : rxjs.EMPTY;
            this.blur$ = !((_c = this.form) === null || _c === void 0 ? void 0 : _c.onSubmit) ? rxjs.fromEvent(this.element, 'blur').pipe(operators.shareReplay(1)) : rxjs.EMPTY;
            this.container = (_e = (_d = this.controlErrorContainer) === null || _d === void 0 ? void 0 : _d.vcr) !== null && _e !== void 0 ? _e : this.vcr;
            this.context = (_g = (_f = this.controlErrorContext) === null || _f === void 0 ? void 0 : _f.scope) !== null && _g !== void 0 ? _g : 'general';
            this.statusChangesObservable = rxjs.merge(this.submit$, this.blur$, this.controlDir.statusChanges || rxjs.EMPTY).subscribe(function () {
                var controlErrors = _this.controlDir.errors;
                if (controlErrors) {
                    var firstKey = Object.keys(controlErrors)[0];
                    _this.setError(_this.config.scope + "." + _this.context + "." + _this.controlDir.name + "." + firstKey);
                }
                else if (_this.ref) {
                    _this.setError(null);
                }
            });
        };
        NgxTvDirective.prototype.ngOnDestroy = function () {
            this.statusChangesObservable.unsubscribe();
        };
        NgxTvDirective.prototype.addSubmittedClass = function () {
            var _a;
            if (this.config.submittedClass) {
                (_a = this.form) === null || _a === void 0 ? void 0 : _a.element.classList.add(this.config.submittedClass);
            }
        };
        NgxTvDirective.prototype.addInvalidClass = function () {
            if (this.config.invalidClass) {
                this.host.nativeElement.classList.add(this.config.invalidClass);
            }
        };
        NgxTvDirective.prototype.removeInvalidClass = function () {
            if (this.config.invalidClass) {
                this.host.nativeElement.classList.remove(this.config.invalidClass);
            }
        };
        NgxTvDirective.prototype.setError = function (errorText) {
            if (!this.ref && errorText) {
                var factory = this.resolver.resolveComponentFactory(this.config.errorsComponent);
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
        };
        return NgxTvDirective;
    }());
    NgxTvDirective.decorators = [
        { type: core.Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[formControl], [formControlName]',
                },] }
    ];
    NgxTvDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ViewContainerRef },
        { type: core.ComponentFactoryResolver },
        { type: forms.NgControl, decorators: [{ type: core.Self }] },
        { type: undefined, decorators: [{ type: core.Inject, args: [NGX_TV_CONFIG,] }] },
        { type: NgxTvContainerDirective, decorators: [{ type: core.Optional }] },
        { type: NgxTvScopeDirective, decorators: [{ type: core.Optional }] },
        { type: NgxTvFormDirective, decorators: [{ type: core.Optional }, { type: core.Host }] }
    ]; };

    var NgxTvContainerComponent = /** @class */ (function () {
        function NgxTvContainerComponent(cdr) {
            this.cdr = cdr;
            this.componentHide = true;
        }
        Object.defineProperty(NgxTvContainerComponent.prototype, "text", {
            set: function (value) {
                if (value !== this.componentText) {
                    this.componentHide = !value;
                    this.componentText = value || '';
                    this.cdr.detectChanges();
                }
            },
            enumerable: false,
            configurable: true
        });
        return NgxTvContainerComponent;
    }());
    NgxTvContainerComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ngx-tv-container',
                    template: "<ng-container *transloco=\"let t\">\n  <p class=\"input-errors\" [class.hide]=\"componentHide\">\n    {{ t(componentText) }}\n  </p>\n</ng-container>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: ["form.submitted input.ng-invalid,input.ng-dirty.ng-invalid{border:1px solid red}"]
                },] }
    ];
    NgxTvContainerComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    NgxTvContainerComponent.propDecorators = {
        text: [{ type: core.Input }]
    };

    function getConfig(config) {
        return Object.assign({ scope: 'validation', submittedClass: 'ng-submitted', errorsComponent: NgxTvContainerComponent, invalidClass: undefined }, config);
    }
    var NgxTvModule = /** @class */ (function () {
        function NgxTvModule() {
        }
        NgxTvModule.forRoot = function (config) {
            return {
                ngModule: NgxTvModule,
                providers: [
                    {
                        provide: NGX_TV_CONFIG,
                        useValue: getConfig(config),
                    },
                    { provide: transloco.TRANSLOCO_SCOPE, useValue: getConfig(config).scope },
                ],
            };
        };
        NgxTvModule.forChild = function () {
            return {
                ngModule: NgxTvModule,
            };
        };
        return NgxTvModule;
    }());
    NgxTvModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        NgxTvDirective,
                        NgxTvFormDirective,
                        NgxTvContainerComponent,
                        NgxTvContainerDirective,
                        NgxTvScopeDirective,
                    ],
                    imports: [common.CommonModule, transloco.TranslocoModule],
                    exports: [NgxTvDirective, NgxTvFormDirective, NgxTvContainerComponent, NgxTvContainerDirective, NgxTvScopeDirective],
                },] }
    ];

    /*
     * Public API Surface of ngx-translation-validation
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NGX_TV_CONFIG = NGX_TV_CONFIG;
    exports.NgxTvContainerComponent = NgxTvContainerComponent;
    exports.NgxTvContainerDirective = NgxTvContainerDirective;
    exports.NgxTvDirective = NgxTvDirective;
    exports.NgxTvFormDirective = NgxTvFormDirective;
    exports.NgxTvModule = NgxTvModule;
    exports.NgxTvScopeDirective = NgxTvScopeDirective;
    exports.getConfig = getConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-translation-validation.umd.js.map
