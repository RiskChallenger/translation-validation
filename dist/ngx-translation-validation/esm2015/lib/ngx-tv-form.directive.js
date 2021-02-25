import { Directive, ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
export class NgxTvFormDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR2LWZvcm0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyYW5zbGF0aW9uLXZhbGlkYXRpb24vc3JjL2xpYi9uZ3gtdHYtZm9ybS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQXNCLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBK0Isa0JBQWtCLEVBQW1DLE1BQU0sZ0JBQWdCLENBQUM7QUFRbEgsTUFBTSxPQUFPLGtCQUFrQjtJQUc3QixZQUFvQixJQUFpQyxFQUFVLGFBQWlDO1FBQTVFLFNBQUksR0FBSixJQUFJLENBQTZCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBRmhHLFlBQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUU2RCxDQUFDO0lBRXBHLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ2pDLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsYUFBYTthQUN4Qjs7O1lBUm1CLFVBQVU7WUFDUSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciwgRm9ybUdyb3VwLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nQ29udHJvbCwgTmdGb3JtLCBOZ01vZGVsR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFTVBUWSwgZnJvbUV2ZW50LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZVJlcGxheSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tmb3JtR3JvdXBdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4VHZGb3JtRGlyZWN0aXZlIHtcbiAgc3VibWl0JCA9IHRoaXMuaG9zdEZvcm1Hcm91cC5uZ1N1Ym1pdDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWY8SFRNTEZvcm1FbGVtZW50PiwgcHJpdmF0ZSBob3N0Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUpIHt9XG5cbiAgZ2V0IG9uQmx1cigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ob3N0Rm9ybUdyb3VwLmZvcm0udXBkYXRlT24gPT09ICdibHVyJztcbiAgfVxuICBnZXQgb25TdWJtaXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaG9zdEZvcm1Hcm91cC5mb3JtLnVwZGF0ZU9uID09PSAnc3VibWl0JztcbiAgfVxuICBnZXQgZWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=