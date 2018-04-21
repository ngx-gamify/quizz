import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var QuizzComponent = /** @class */ (function () {
    function QuizzComponent() {
    }
    QuizzComponent.prototype.ngOnInit = function () { };
    return QuizzComponent;
}());
QuizzComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-quizz',
                template: "<p>\n  quizz works! {{ data | json}}\n</p>"
            },] },
];
QuizzComponent.ctorParameters = function () { return []; };
QuizzComponent.propDecorators = {
    "data": [{ type: Input },],
};
var QuizzModule = /** @class */ (function () {
    function QuizzModule() {
    }
    return QuizzModule;
}());
QuizzModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [QuizzComponent],
                exports: [QuizzComponent]
            },] },
];

export { QuizzModule, QuizzComponent };
//# sourceMappingURL=ngx-gamify-quizz.js.map
