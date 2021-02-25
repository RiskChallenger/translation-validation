import { ChangeDetectorRef } from '@angular/core';
export declare class NgxTvContainerComponent {
    private cdr;
    componentText?: string;
    componentHide: boolean;
    set text(value: string | null);
    constructor(cdr: ChangeDetectorRef);
}
