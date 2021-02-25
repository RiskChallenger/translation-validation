import { ComponentFactoryResolver, Directive, ElementRef, Host, Inject, Optional, Self, ViewContainerRef, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { EMPTY, fromEvent, merge } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { NgxTvContainerDirective } from './ngx-tv-container.directive';
import { NgxTvFormDirective } from './ngx-tv-form.directive';
import { NgxTvScopeDirective } from './ngx-tv-scope.directive';
import { NGX_TV_CONFIG } from './ngx-tv.config';
export class NgxTvDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR2LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmFuc2xhdGlvbi12YWxpZGF0aW9uL3NyYy9saWIvbmd4LXR2LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsd0JBQXdCLEVBRXhCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLE1BQU0sRUFHTixRQUFRLEVBQ1IsSUFBSSxFQUNKLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQWUsTUFBTSxpQkFBaUIsQ0FBQztBQU03RCxNQUFNLE9BQU8sY0FBYztJQVN6QixZQUNVLElBQWlDLEVBQ2pDLEdBQXFCLEVBQ3JCLFFBQWtDLEVBQzFCLFVBQXFCLEVBQ04sTUFBbUIsRUFDOUIscUJBQStDLEVBQy9DLG1CQUF5QyxFQUNqQyxJQUF5QjtRQVA3QyxTQUFJLEdBQUosSUFBSSxDQUE2QjtRQUNqQyxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ04sV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUM5QiwwQkFBcUIsR0FBckIscUJB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RyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbkYsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztTQUN0QjtJQUNILENBQUM7OztZQXpGRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsa0NBQWtDO2FBQzdDOzs7WUFyQkMsVUFBVTtZQU9WLGdCQUFnQjtZQVZoQix3QkFBd0I7WUFZakIsU0FBUyx1QkEwQmIsSUFBSTs0Q0FDSixNQUFNLFNBQUMsYUFBYTtZQXhCaEIsdUJBQXVCLHVCQXlCM0IsUUFBUTtZQXRCSixtQkFBbUIsdUJBdUJ2QixRQUFRO1lBeEJKLGtCQUFrQix1QkF5QnRCLFFBQVEsWUFBSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRU1QVFksIGZyb21FdmVudCwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmVSZXBsYXksIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5neFR2Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtdHYtY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hUdkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LXR2LWNvbnRhaW5lci9uZ3gtdHYtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hUdkZvcm1EaXJlY3RpdmUgfSBmcm9tICcuL25neC10di1mb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hUdlNjb3BlRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtdHYtc2NvcGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5HWF9UVl9DT05GSUcsIE5neFR2Q29uZmlnIH0gZnJvbSAnLi9uZ3gtdHYuY29uZmlnJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZm9ybUNvbnRyb2xdLCBbZm9ybUNvbnRyb2xOYW1lXScsXG59KVxuZXhwb3J0IGNsYXNzIE5neFR2RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICByZWY/OiBDb21wb25lbnRSZWY8Tmd4VHZDb250YWluZXJDb21wb25lbnQ+O1xuICBzdWJtaXQkITogT2JzZXJ2YWJsZTxFdmVudD47XG4gIGNvbnRhaW5lciE6IFZpZXdDb250YWluZXJSZWY7XG4gIGJsdXIkITogT2JzZXJ2YWJsZTxFdmVudD47XG4gIGNvbnRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICBzdGF0dXNDaGFuZ2VzT2JzZXJ2YWJsZSE6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWY8SFRNTEZvcm1FbGVtZW50PixcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgQFNlbGYoKSBwcml2YXRlIGNvbnRyb2xEaXI6IE5nQ29udHJvbCxcbiAgICBASW5qZWN0KE5HWF9UVl9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBOZ3hUdkNvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGNvbnRyb2xFcnJvckNvbnRhaW5lcj86IE5neFR2Q29udGFpbmVyRGlyZWN0aXZlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgY29udHJvbEVycm9yQ29udGV4dD86IE5neFR2U2NvcGVEaXJlY3RpdmUsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIGZvcm0/OiBOZ3hUdkZvcm1EaXJlY3RpdmVcbiAgKSB7fVxuXG4gIGdldCBlbGVtZW50KCk6IEhUTUxGb3JtRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJtaXQkID1cbiAgICAgIHRoaXMuZm9ybT8uc3VibWl0JC5waXBlKFxuICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkU3VibWl0dGVkQ2xhc3MoKTtcbiAgICAgICAgfSlcbiAgICAgICkgPz8gRU1QVFk7XG4gICAgdGhpcy5ibHVyJCA9ICF0aGlzLmZvcm0/Lm9uU3VibWl0ID8gZnJvbUV2ZW50KHRoaXMuZWxlbWVudCwgJ2JsdXInKS5waXBlKHNoYXJlUmVwbGF5KDEpKSA6IEVNUFRZO1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jb250cm9sRXJyb3JDb250YWluZXI/LnZjciA/PyB0aGlzLnZjcjtcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNvbnRyb2xFcnJvckNvbnRleHQ/LnNjb3BlID8/ICdnZW5lcmFsJztcblxuICAgIHRoaXMuc3RhdHVzQ2hhbmdlc09ic2VydmFibGUgPSBtZXJnZSh0aGlzLnN1Ym1pdCQsIHRoaXMuYmx1ciQsIHRoaXMuY29udHJvbERpci5zdGF0dXNDaGFuZ2VzIHx8IEVNUFRZKS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xFcnJvcnMgPSB0aGlzLmNvbnRyb2xEaXIuZXJyb3JzO1xuICAgICAgICBpZiAoY29udHJvbEVycm9ycykge1xuICAgICAgICAgIGNvbnN0IGZpcnN0S2V5ID0gT2JqZWN0LmtleXMoY29udHJvbEVycm9ycylbMF07XG4gICAgICAgICAgdGhpcy5zZXRFcnJvcihgJHt0aGlzLmNvbmZpZy5zY29wZX0uJHt0aGlzLmNvbnRleHR9LiR7dGhpcy5jb250cm9sRGlyLm5hbWV9LiR7Zmlyc3RLZXl9YCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZWYpIHtcbiAgICAgICAgICB0aGlzLnNldEVycm9yKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdHVzQ2hhbmdlc09ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGFkZFN1Ym1pdHRlZENsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy5zdWJtaXR0ZWRDbGFzcykge1xuICAgICAgdGhpcy5mb3JtPy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuc3VibWl0dGVkQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEludmFsaWRDbGFzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcuaW52YWxpZENsYXNzKSB7XG4gICAgICB0aGlzLmhvc3QubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmludmFsaWRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSW52YWxpZENsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy5pbnZhbGlkQ2xhc3MpIHtcbiAgICAgIHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcuaW52YWxpZENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEVycm9yKGVycm9yVGV4dDogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5yZWYgJiYgZXJyb3JUZXh0KSB7XG4gICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbmZpZy5lcnJvcnNDb21wb25lbnQpO1xuICAgICAgdGhpcy5yZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgICB0aGlzLmFkZEludmFsaWRDbGFzcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZWYpIHtcbiAgICAgIHRoaXMucmVmLmluc3RhbmNlLnRleHQgPSBlcnJvclRleHQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVmICYmIGVycm9yVGV4dCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yZWYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5yZW1vdmVJbnZhbGlkQ2xhc3MoKTtcbiAgICAgIHRoaXMucmVmID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19