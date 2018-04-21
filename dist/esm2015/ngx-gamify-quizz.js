import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class QuizzComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
QuizzComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-quizz',
                template: `<p>
  quizz works! {{ data | json}}
</p>`
            },] },
];
/** @nocollapse */
QuizzComponent.ctorParameters = () => [];
QuizzComponent.propDecorators = {
    "data": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class QuizzModule {
}
QuizzModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [QuizzComponent],
                exports: [QuizzComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { QuizzModule, QuizzComponent };
//# sourceMappingURL=ngx-gamify-quizz.js.map
