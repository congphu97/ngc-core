import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class AngularCoreService {
    constructor() { }
}
AngularCoreService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AngularCoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AngularCoreService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AngularCoreService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AngularCoreService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AngularCoreComponent {
    constructor() { }
    ngOnInit() {
    }
}
AngularCoreComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AngularCoreComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AngularCoreComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: AngularCoreComponent, selector: "lib-angular-core", ngImport: i0, template: `
    <p>
      angular-core works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AngularCoreComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-angular-core',
                    template: `
    <p>
      angular-core works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class AngularCoreModule {
}
AngularCoreModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AngularCoreModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularCoreModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AngularCoreModule, declarations: [AngularCoreComponent], exports: [AngularCoreComponent] });
AngularCoreModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AngularCoreModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AngularCoreModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AngularCoreComponent
                    ],
                    imports: [],
                    exports: [
                        AngularCoreComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of angular-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularCoreComponent, AngularCoreModule, AngularCoreService };
//# sourceMappingURL=angular-core.mjs.map
