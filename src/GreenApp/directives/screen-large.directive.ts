import { Directive, Input, TemplateRef, ViewContainerRef , OnDestroy} from '@angular/core';

import { ScreenService } from '../services/screen.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({ selector: '[screenLarge]' })
export class ScreenLarge implements OnDestroy {
    private hasView = false;
    private screenSubsription: Subscription;

    constructor(private viewContainer: ViewContainerRef,
        private template: TemplateRef<Object>,
        private screenService: ScreenService) {
        this.screenSubsription = screenService.resize$.subscribe(() => this.onResize());
    }

    @Input()
    set screenLarge(condition) {
        //ignore the passed condition and set it based on screen size
        condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint

        if (condition && !this.hasView) {
            this.hasView = true;
            this.viewContainer.createEmbeddedView(this.template)
        } else if (!condition && this.hasView) {
            this.hasView = false;
            this.viewContainer.clear();
        }
    }

    ngOnDestroy() {
        this.screenSubsription.unsubscribe();
    }

    onResize() {
        //trigger the setter
        this.screenLarge = false;
    }
}