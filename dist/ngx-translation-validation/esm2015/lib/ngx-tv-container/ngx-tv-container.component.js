import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
export class NgxTvContainerComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR2LWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJhbnNsYXRpb24tdmFsaWRhdGlvbi9zcmMvbGliL25neC10di1jb250YWluZXIvbmd4LXR2LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTN0YsTUFBTSxPQUFPLHVCQUF1QjtJQVlsQyxZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVYxQyxrQkFBYSxHQUFHLElBQUksQ0FBQztJQVV3QixDQUFDO0lBUjlDLElBQWEsSUFBSSxDQUFDLEtBQW9CO1FBQ3BDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixtS0FBZ0Q7Z0JBRWhELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7O1lBUmlDLGlCQUFpQjs7O21CQWFoRCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbmd4LXR2LWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtdHYtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LXR2LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmd4VHZDb250YWluZXJDb21wb25lbnQge1xuICBjb21wb25lbnRUZXh0Pzogc3RyaW5nO1xuICBjb21wb25lbnRIaWRlID0gdHJ1ZTtcblxuICBASW5wdXQoKSBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5jb21wb25lbnRUZXh0KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudEhpZGUgPSAhdmFsdWU7XG4gICAgICB0aGlzLmNvbXBvbmVudFRleHQgPSB2YWx1ZSB8fCAnJztcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG4iXX0=