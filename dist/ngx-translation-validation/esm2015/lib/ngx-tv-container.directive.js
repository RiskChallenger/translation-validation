import { Directive, ViewContainerRef } from '@angular/core';
export class NgxTvContainerDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR2LWNvbnRhaW5lci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJhbnNsYXRpb24tdmFsaWRhdGlvbi9zcmMvbGliL25neC10di1jb250YWluZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNNUQsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUFtQixHQUFxQjtRQUFyQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtJQUFHLENBQUM7OztZQUw3QyxTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7WUFMbUIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW25neFR2Q29udGFpbmVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE5neFR2Q29udGFpbmVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZjcjogVmlld0NvbnRhaW5lclJlZikge31cbn1cbiJdfQ==