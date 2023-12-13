import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[ifNot]",
})
export class IfNotDirective {
    private hasView = false;

    constructor(
        // a reference to the template where this directive is applied
        private templateRef: TemplateRef<any>,

        // a reference to the container where this template is placed
        private viewContainer: ViewContainerRef
    ) {}

    // "Input" to enable the property accept a value from the parent component
    // "set" to automatically react to value changes
    @Input() set ifNot(condition: boolean) {
        if (!condition && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (condition && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
