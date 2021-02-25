import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { NgxTvContainerDirective } from './ngx-tv-container.directive';
import { NgxTvContainerComponent } from './ngx-tv-container/ngx-tv-container.component';
import { NgxTvFormDirective } from './ngx-tv-form.directive';
import { NgxTvScopeDirective } from './ngx-tv-scope.directive';
import { NGX_TV_CONFIG } from './ngx-tv.config';
import { NgxTvDirective } from './ngx-tv.directive';
export function getConfig(config) {
    return Object.assign({ scope: 'validation', submittedClass: 'ng-submitted', errorsComponent: NgxTvContainerComponent, invalidClass: undefined }, config);
}
export class NgxTvModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR2Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmFuc2xhdGlvbi12YWxpZGF0aW9uL3NyYy9saWIvbmd4LXR2Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFlLE1BQU0saUJBQWlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE1BQU0sVUFBVSxTQUFTLENBQUMsTUFBNkI7SUFDckQsdUJBQ0UsS0FBSyxFQUFFLFlBQVksRUFDbkIsY0FBYyxFQUFFLGNBQWMsRUFDOUIsZUFBZSxFQUFFLHVCQUF1QixFQUN4QyxZQUFZLEVBQUUsU0FBUyxJQUNwQixNQUFNLEVBQ1Q7QUFDSixDQUFDO0FBYUQsTUFBTSxPQUFPLFdBQVc7SUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFvQjtRQUNqQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixRQUFRLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQztpQkFDNUI7Z0JBQ0QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFO2FBQ2hFO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUTtRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztTQUN0QixDQUFDO0lBQ0osQ0FBQzs7O1lBN0JGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUN2QixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsQ0FBQzthQUNySCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVFJBTlNMT0NPX1NDT1BFLCBUcmFuc2xvY29Nb2R1bGUgfSBmcm9tICdAbmduZWF0L3RyYW5zbG9jbyc7XG5pbXBvcnQgeyBOZ3hUdkNvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LXR2LWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4VHZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL25neC10di1jb250YWluZXIvbmd4LXR2LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4VHZGb3JtRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtdHYtZm9ybS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4VHZTY29wZURpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LXR2LXNjb3BlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOR1hfVFZfQ09ORklHLCBOZ3hUdkNvbmZpZyB9IGZyb20gJy4vbmd4LXR2LmNvbmZpZyc7XG5pbXBvcnQgeyBOZ3hUdkRpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LXR2LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWcoY29uZmlnPzogUGFydGlhbDxOZ3hUdkNvbmZpZz4pOiBOZ3hUdkNvbmZpZyB7XG4gIHJldHVybiB7XG4gICAgc2NvcGU6ICd2YWxpZGF0aW9uJyxcbiAgICBzdWJtaXR0ZWRDbGFzczogJ25nLXN1Ym1pdHRlZCcsXG4gICAgZXJyb3JzQ29tcG9uZW50OiBOZ3hUdkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBpbnZhbGlkQ2xhc3M6IHVuZGVmaW5lZCxcbiAgICAuLi5jb25maWcsXG4gIH07XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5neFR2RGlyZWN0aXZlLFxuICAgIE5neFR2Rm9ybURpcmVjdGl2ZSxcbiAgICBOZ3hUdkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBOZ3hUdkNvbnRhaW5lckRpcmVjdGl2ZSxcbiAgICBOZ3hUdlNjb3BlRGlyZWN0aXZlLFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUcmFuc2xvY29Nb2R1bGVdLFxuICBleHBvcnRzOiBbTmd4VHZEaXJlY3RpdmUsIE5neFR2Rm9ybURpcmVjdGl2ZSwgTmd4VHZDb250YWluZXJDb21wb25lbnQsIE5neFR2Q29udGFpbmVyRGlyZWN0aXZlLCBOZ3hUdlNjb3BlRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4VHZNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBOZ3hUdkNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4VHZNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neFR2TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBOR1hfVFZfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiBnZXRDb25maWcoY29uZmlnKSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBwcm92aWRlOiBUUkFOU0xPQ09fU0NPUEUsIHVzZVZhbHVlOiBnZXRDb25maWcoY29uZmlnKS5zY29wZSB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4VHZNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neFR2TW9kdWxlLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==