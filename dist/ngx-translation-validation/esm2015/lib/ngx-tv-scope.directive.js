import { Directive, Input } from '@angular/core';
export class NgxTvScopeDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR2LXNjb3BlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmFuc2xhdGlvbi12YWxpZGF0aW9uL3NyYy9saWIvbmd4LXR2LXNjb3BlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1qRCxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCLElBQ0ksVUFBVSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7O3lCQUtFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW25neFR2U2NvcGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4VHZTY29wZURpcmVjdGl2ZSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3Njb3BlPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuZ3hUdlNjb3BlKHNjb3BlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zY29wZSA9IHNjb3BlO1xuICB9XG5cbiAgZ2V0IHNjb3BlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Njb3BlO1xuICB9XG59XG4iXX0=