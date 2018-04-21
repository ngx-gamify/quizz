(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@ngx-gamify/quizz', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ngx-gamify'] = global['ngx-gamify'] || {}, global['ngx-gamify'].quizz = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var QuizzComponent = /** @class */ (function () {
    function QuizzComponent() {
    }
    QuizzComponent.prototype.ngOnInit = function () { };
    return QuizzComponent;
}());
QuizzComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-quizz',
                template: "<p>\n  quizz works! {{ data | json}}\n</p>"
            },] },
];
QuizzComponent.ctorParameters = function () { return []; };
QuizzComponent.propDecorators = {
    "data": [{ type: core.Input },],
};
var QuizzModule = /** @class */ (function () {
    function QuizzModule() {
    }
    return QuizzModule;
}());
QuizzModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [QuizzComponent],
                exports: [QuizzComponent]
            },] },
];

exports.QuizzModule = QuizzModule;
exports.QuizzComponent = QuizzComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-gamify-quizz.umd.js.map
