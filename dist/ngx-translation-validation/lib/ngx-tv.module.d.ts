import { ModuleWithProviders } from '@angular/core';
import { NgxTvConfig } from './ngx-tv.config';
export declare function getConfig(config?: Partial<NgxTvConfig>): NgxTvConfig;
export declare class NgxTvModule {
    static forRoot(config?: NgxTvConfig): ModuleWithProviders<NgxTvModule>;
    static forChild(): ModuleWithProviders<NgxTvModule>;
}
