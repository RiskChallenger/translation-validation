import { ElementRef, EventEmitter } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
export declare class NgxTvFormDirective {
    private host;
    private hostFormGroup;
    submit$: EventEmitter<any>;
    constructor(host: ElementRef<HTMLFormElement>, hostFormGroup: FormGroupDirective);
    get onBlur(): boolean;
    get onSubmit(): boolean;
    get element(): HTMLElement;
}
