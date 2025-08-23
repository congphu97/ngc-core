import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { AdjustFontsizeDirective, AspectRatioDirective, AutoFocusDirective, AutoResetDirective, BackButtonDirective, DetectScrollDirective, DisableControlDirective, FullscreenDirective, MaxLessThanDirective, MinGreaterThanDirective, NgInitDirective, NgVarDirective } from './directives';
import { appInitializerFactory } from './loaders/app-initializer-factory';
import './lodash-mixin';
import { CapitalizeFirstPipe, ClonePipe, CommasPipe, ConvertPercentPipe, EmojiPipe, EmptyPipe, FileSizePipe, Filter2Pipe, FilterPipe, FindPipe, FixedPipe, FlagIconPipe, HourMeridiemPipe, ImagePipe, IncludesPipe, IsContrastPipe, IsFinitePipe, KUnitPipe, LinkPipe, MarkTextPipe, MaxPipe, MinPipe, MomentDatePipe, MomentFromNowPipe, OrderByPipe, PadNumberPipe, Percent2Pipe, SafeHtmlPipe, TimeStringPipe, TimerPipe, TrackByFnPipe, UnitPipe } from './pipes';
import { LocaleService } from './services';
import * as i0 from "@angular/core";
export class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializerFactory,
            deps: [TranslateService, LocaleService, Injector],
            multi: true,
        },
        CookieService,
        /* Service Inject (Do not remove) */
        // ApiService, CanDeactivateGuardService, LocaleService,
        // LoopService, MediaService, NetworkService,
        // PageService, ServiceWorkerService, SharedService,
        // StorageService, WebNotificationService, WebSocketService,
        /* End Service Inject (Do not remove) */
    ], imports: [HttpClientModule, RouterModule, BrowserModule, TranslateModule, BrowserModule, TranslateModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoreModule, [{
        type: NgModule,
        args: [{
                imports: [HttpClientModule, RouterModule, BrowserModule, TranslateModule],
                exports: [
                    BrowserModule, TranslateModule,
                    /* Component Inject (Do not remove) */
                    /* End Component Inject (Do not remove) */
                    /* Directive Inject (Do not remove) */
                    AdjustFontsizeDirective, AspectRatioDirective, AutoFocusDirective,
                    AutoResetDirective, BackButtonDirective, DetectScrollDirective,
                    DisableControlDirective, FullscreenDirective, MaxLessThanDirective,
                    MinGreaterThanDirective, NgInitDirective, NgVarDirective,
                    /* End Directive Inject (Do not remove) */
                    /* Pipe Inject (Do not remove) */
                    CapitalizeFirstPipe, ClonePipe, CommasPipe,
                    ConvertPercentPipe, EmojiPipe, EmptyPipe,
                    FileSizePipe, FilterPipe, Filter2Pipe,
                    FindPipe, FixedPipe, FlagIconPipe,
                    HourMeridiemPipe, ImagePipe, IncludesPipe,
                    IsContrastPipe, IsFinitePipe, KUnitPipe,
                    LinkPipe, MarkTextPipe, MaxPipe,
                    MinPipe, MomentDatePipe, MomentFromNowPipe,
                    OrderByPipe, PadNumberPipe, Percent2Pipe,
                    SafeHtmlPipe, TimeStringPipe, TimerPipe,
                    TrackByFnPipe, UnitPipe,
                    /* End Pipe Inject (Do not remove) */
                ],
                declarations: [
                    /* Component Inject (Do not remove) */
                    /* End Component Inject (Do not remove) */
                    /* Directive Inject (Do not remove) */
                    AdjustFontsizeDirective, AspectRatioDirective, AutoFocusDirective,
                    AutoResetDirective, BackButtonDirective, DetectScrollDirective,
                    DisableControlDirective, FullscreenDirective, MaxLessThanDirective,
                    MinGreaterThanDirective, NgInitDirective, NgVarDirective,
                    /* End Directive Inject (Do not remove) */
                    /* Pipe Inject (Do not remove) */
                    CapitalizeFirstPipe, ClonePipe, CommasPipe,
                    ConvertPercentPipe, EmojiPipe, EmptyPipe,
                    FileSizePipe, FilterPipe, Filter2Pipe,
                    FindPipe, FixedPipe, FlagIconPipe,
                    HourMeridiemPipe, ImagePipe, IncludesPipe,
                    IsContrastPipe, IsFinitePipe, KUnitPipe,
                    LinkPipe, MarkTextPipe, MaxPipe,
                    MinPipe, MomentDatePipe, MomentFromNowPipe,
                    OrderByPipe, PadNumberPipe, Percent2Pipe,
                    SafeHtmlPipe, TimeStringPipe, TimerPipe,
                    TrackByFnPipe, UnitPipe,
                    /* End Pipe Inject (Do not remove) */
                ],
                providers: [
                    {
                        provide: APP_INITIALIZER,
                        useFactory: appInitializerFactory,
                        deps: [TranslateService, LocaleService, Injector],
                        multi: true,
                    },
                    CookieService,
                    /* Service Inject (Do not remove) */
                    // ApiService, CanDeactivateGuardService, LocaleService,
                    // LoopService, MediaService, NetworkService,
                    // PageService, ServiceWorkerService, SharedService,
                    // StorageService, WebNotificationService, WebSocketService,
                    /* End Service Inject (Do not remove) */
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreModule, { declarations: [
        /* Component Inject (Do not remove) */
        /* End Component Inject (Do not remove) */
        /* Directive Inject (Do not remove) */
        AdjustFontsizeDirective, AspectRatioDirective, AutoFocusDirective,
        AutoResetDirective, BackButtonDirective, DetectScrollDirective,
        DisableControlDirective, FullscreenDirective, MaxLessThanDirective,
        MinGreaterThanDirective, NgInitDirective, NgVarDirective,
        /* End Directive Inject (Do not remove) */
        /* Pipe Inject (Do not remove) */
        CapitalizeFirstPipe, ClonePipe, CommasPipe,
        ConvertPercentPipe, EmojiPipe, EmptyPipe,
        FileSizePipe, FilterPipe, Filter2Pipe,
        FindPipe, FixedPipe, FlagIconPipe,
        HourMeridiemPipe, ImagePipe, IncludesPipe,
        IsContrastPipe, IsFinitePipe, KUnitPipe,
        LinkPipe, MarkTextPipe, MaxPipe,
        MinPipe, MomentDatePipe, MomentFromNowPipe,
        OrderByPipe, PadNumberPipe, Percent2Pipe,
        SafeHtmlPipe, TimeStringPipe, TimerPipe,
        TrackByFnPipe, UnitPipe], imports: [HttpClientModule, RouterModule, BrowserModule, TranslateModule], exports: [BrowserModule, TranslateModule,
        /* Component Inject (Do not remove) */
        /* End Component Inject (Do not remove) */
        /* Directive Inject (Do not remove) */
        AdjustFontsizeDirective, AspectRatioDirective, AutoFocusDirective,
        AutoResetDirective, BackButtonDirective, DetectScrollDirective,
        DisableControlDirective, FullscreenDirective, MaxLessThanDirective,
        MinGreaterThanDirective, NgInitDirective, NgVarDirective,
        /* End Directive Inject (Do not remove) */
        /* Pipe Inject (Do not remove) */
        CapitalizeFirstPipe, ClonePipe, CommasPipe,
        ConvertPercentPipe, EmojiPipe, EmptyPipe,
        FileSizePipe, FilterPipe, Filter2Pipe,
        FindPipe, FixedPipe, FlagIconPipe,
        HourMeridiemPipe, ImagePipe, IncludesPipe,
        IsContrastPipe, IsFinitePipe, KUnitPipe,
        LinkPipe, MarkTextPipe, MaxPipe,
        MinPipe, MomentDatePipe, MomentFromNowPipe,
        OrderByPipe, PadNumberPipe, Percent2Pipe,
        SafeHtmlPipe, TimeStringPipe, TimerPipe,
        TrackByFnPipe, UnitPipe] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUNOLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUNqRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFDOUQsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQ2xFLHVCQUF1QixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQ3hELE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUNOLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQzFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQ3hDLFlBQVksRUFDWixXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUNqQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUN6QyxjQUFjLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFDdkMsUUFBUSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQy9CLE9BQU8sRUFB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ZUFBZTtRQUU5QixzQ0FBc0M7UUFDdEMsMENBQTBDO1FBRTFDLHNDQUFzQztRQUN0Qyx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0I7UUFDakUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCO1FBQzlELHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtRQUNsRSx1QkFBdUIsRUFBRSxlQUFlLEVBQUUsY0FBYztRQUN4RCwwQ0FBMEM7UUFFMUMsaUNBQWlDO1FBQ2pDLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxVQUFVO1FBQzFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxTQUFTO1FBQ3hDLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVztRQUNyQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVk7UUFDakMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFlBQVk7UUFDekMsY0FBYyxFQUFFLFlBQVksRUFBRSxTQUFTO1FBQ3ZDLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTztRQUMvQixPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQjtRQUMxQyxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVk7UUFDeEMsWUFBWSxFQUFFLGNBQWMsRUFBRSxTQUFTO1FBQ3ZDLGFBQWEsRUFBRSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgSW5qZWN0b3IsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcblxuaW1wb3J0IHtcblx0QWRqdXN0Rm9udHNpemVEaXJlY3RpdmUsIEFzcGVjdFJhdGlvRGlyZWN0aXZlLCBBdXRvRm9jdXNEaXJlY3RpdmUsXG5cdEF1dG9SZXNldERpcmVjdGl2ZSwgQmFja0J1dHRvbkRpcmVjdGl2ZSwgRGV0ZWN0U2Nyb2xsRGlyZWN0aXZlLFxuXHREaXNhYmxlQ29udHJvbERpcmVjdGl2ZSwgRnVsbHNjcmVlbkRpcmVjdGl2ZSwgTWF4TGVzc1RoYW5EaXJlY3RpdmUsXG5cdE1pbkdyZWF0ZXJUaGFuRGlyZWN0aXZlLCBOZ0luaXREaXJlY3RpdmUsIE5nVmFyRGlyZWN0aXZlXG59IGZyb20gJy4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBhcHBJbml0aWFsaXplckZhY3RvcnkgfSBmcm9tICcuL2xvYWRlcnMvYXBwLWluaXRpYWxpemVyLWZhY3RvcnknO1xuaW1wb3J0ICcuL2xvZGFzaC1taXhpbic7XG5pbXBvcnQge1xuXHRDYXBpdGFsaXplRmlyc3RQaXBlLCBDbG9uZVBpcGUsIENvbW1hc1BpcGUsXG5cdENvbnZlcnRQZXJjZW50UGlwZSwgRW1vamlQaXBlLCBFbXB0eVBpcGUsXG5cdEZpbGVTaXplUGlwZSxcblx0RmlsdGVyMlBpcGUsXG5cdEZpbHRlclBpcGUsXG5cdEZpbmRQaXBlLCBGaXhlZFBpcGUsIEZsYWdJY29uUGlwZSxcblx0SG91ck1lcmlkaWVtUGlwZSwgSW1hZ2VQaXBlLCBJbmNsdWRlc1BpcGUsXG5cdElzQ29udHJhc3RQaXBlLCBJc0Zpbml0ZVBpcGUsIEtVbml0UGlwZSxcblx0TGlua1BpcGUsIE1hcmtUZXh0UGlwZSwgTWF4UGlwZSxcblx0TWluUGlwZSwgTW9tZW50RGF0ZVBpcGUsIE1vbWVudEZyb21Ob3dQaXBlLFxuXHRPcmRlckJ5UGlwZSwgUGFkTnVtYmVyUGlwZSwgUGVyY2VudDJQaXBlLFxuXHRTYWZlSHRtbFBpcGUsIFRpbWVTdHJpbmdQaXBlLCBUaW1lclBpcGUsXG5cdFRyYWNrQnlGblBpcGUsIFVuaXRQaXBlXG59IGZyb20gJy4vcGlwZXMnO1xuaW1wb3J0IHtcblx0TG9jYWxlU2VydmljZVxufSBmcm9tICcuL3NlcnZpY2VzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogWyBIdHRwQ2xpZW50TW9kdWxlLCBSb3V0ZXJNb2R1bGUsIEJyb3dzZXJNb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZSBdLFxuXHRleHBvcnRzOiBbXG5cdFx0QnJvd3Nlck1vZHVsZSwgVHJhbnNsYXRlTW9kdWxlLFxuXG5cdFx0LyogQ29tcG9uZW50IEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHQvKiBFbmQgQ29tcG9uZW50IEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblxuXHRcdC8qIERpcmVjdGl2ZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0QWRqdXN0Rm9udHNpemVEaXJlY3RpdmUsIEFzcGVjdFJhdGlvRGlyZWN0aXZlLCBBdXRvRm9jdXNEaXJlY3RpdmUsXG5cdFx0QXV0b1Jlc2V0RGlyZWN0aXZlLCBCYWNrQnV0dG9uRGlyZWN0aXZlLCBEZXRlY3RTY3JvbGxEaXJlY3RpdmUsXG5cdFx0RGlzYWJsZUNvbnRyb2xEaXJlY3RpdmUsIEZ1bGxzY3JlZW5EaXJlY3RpdmUsIE1heExlc3NUaGFuRGlyZWN0aXZlLFxuXHRcdE1pbkdyZWF0ZXJUaGFuRGlyZWN0aXZlLCBOZ0luaXREaXJlY3RpdmUsIE5nVmFyRGlyZWN0aXZlLFxuXHRcdC8qIEVuZCBEaXJlY3RpdmUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG5cdFx0LyogUGlwZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0Q2FwaXRhbGl6ZUZpcnN0UGlwZSwgQ2xvbmVQaXBlLCBDb21tYXNQaXBlLFxuXHRcdENvbnZlcnRQZXJjZW50UGlwZSwgRW1vamlQaXBlLCBFbXB0eVBpcGUsXG5cdFx0RmlsZVNpemVQaXBlLCBGaWx0ZXJQaXBlLCBGaWx0ZXIyUGlwZSxcblx0XHRGaW5kUGlwZSwgRml4ZWRQaXBlLCBGbGFnSWNvblBpcGUsXG5cdFx0SG91ck1lcmlkaWVtUGlwZSwgSW1hZ2VQaXBlLCBJbmNsdWRlc1BpcGUsXG5cdFx0SXNDb250cmFzdFBpcGUsIElzRmluaXRlUGlwZSwgS1VuaXRQaXBlLFxuXHRcdExpbmtQaXBlLCBNYXJrVGV4dFBpcGUsIE1heFBpcGUsXG5cdFx0TWluUGlwZSwgTW9tZW50RGF0ZVBpcGUsIE1vbWVudEZyb21Ob3dQaXBlLFxuXHRcdE9yZGVyQnlQaXBlLCBQYWROdW1iZXJQaXBlLCBQZXJjZW50MlBpcGUsXG5cdFx0U2FmZUh0bWxQaXBlLCBUaW1lU3RyaW5nUGlwZSwgVGltZXJQaXBlLFxuXHRcdFRyYWNrQnlGblBpcGUsIFVuaXRQaXBlLFxuXHRcdC8qIEVuZCBQaXBlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0LyogQ29tcG9uZW50IEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHQvKiBFbmQgQ29tcG9uZW50IEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblxuXHRcdC8qIERpcmVjdGl2ZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0QWRqdXN0Rm9udHNpemVEaXJlY3RpdmUsIEFzcGVjdFJhdGlvRGlyZWN0aXZlLCBBdXRvRm9jdXNEaXJlY3RpdmUsXG5cdFx0QXV0b1Jlc2V0RGlyZWN0aXZlLCBCYWNrQnV0dG9uRGlyZWN0aXZlLCBEZXRlY3RTY3JvbGxEaXJlY3RpdmUsXG5cdFx0RGlzYWJsZUNvbnRyb2xEaXJlY3RpdmUsIEZ1bGxzY3JlZW5EaXJlY3RpdmUsIE1heExlc3NUaGFuRGlyZWN0aXZlLFxuXHRcdE1pbkdyZWF0ZXJUaGFuRGlyZWN0aXZlLCBOZ0luaXREaXJlY3RpdmUsIE5nVmFyRGlyZWN0aXZlLFxuXHRcdC8qIEVuZCBEaXJlY3RpdmUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG5cdFx0LyogUGlwZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0Q2FwaXRhbGl6ZUZpcnN0UGlwZSwgQ2xvbmVQaXBlLCBDb21tYXNQaXBlLFxuXHRcdENvbnZlcnRQZXJjZW50UGlwZSwgRW1vamlQaXBlLCBFbXB0eVBpcGUsXG5cdFx0RmlsZVNpemVQaXBlLCBGaWx0ZXJQaXBlLCBGaWx0ZXIyUGlwZSxcblx0XHRGaW5kUGlwZSwgRml4ZWRQaXBlLCBGbGFnSWNvblBpcGUsXG5cdFx0SG91ck1lcmlkaWVtUGlwZSwgSW1hZ2VQaXBlLCBJbmNsdWRlc1BpcGUsXG5cdFx0SXNDb250cmFzdFBpcGUsIElzRmluaXRlUGlwZSwgS1VuaXRQaXBlLFxuXHRcdExpbmtQaXBlLCBNYXJrVGV4dFBpcGUsIE1heFBpcGUsXG5cdFx0TWluUGlwZSwgTW9tZW50RGF0ZVBpcGUsIE1vbWVudEZyb21Ob3dQaXBlLFxuXHRcdE9yZGVyQnlQaXBlLCBQYWROdW1iZXJQaXBlLCBQZXJjZW50MlBpcGUsXG5cdFx0U2FmZUh0bWxQaXBlLCBUaW1lU3RyaW5nUGlwZSwgVGltZXJQaXBlLFxuXHRcdFRyYWNrQnlGblBpcGUsIFVuaXRQaXBlLFxuXHRcdC8qIEVuZCBQaXBlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZVx0XHQ6IEFQUF9JTklUSUFMSVpFUixcblx0XHRcdHVzZUZhY3RvcnlcdDogYXBwSW5pdGlhbGl6ZXJGYWN0b3J5LFxuXHRcdFx0ZGVwc1x0XHQ6IFsgVHJhbnNsYXRlU2VydmljZSwgTG9jYWxlU2VydmljZSwgSW5qZWN0b3IgXSxcblx0XHRcdG11bHRpXHRcdDogdHJ1ZSxcblx0XHR9LFxuXG5cdFx0Q29va2llU2VydmljZSxcblxuXHRcdC8qIFNlcnZpY2UgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdC8vIEFwaVNlcnZpY2UsIENhbkRlYWN0aXZhdGVHdWFyZFNlcnZpY2UsIExvY2FsZVNlcnZpY2UsXG5cdFx0Ly8gTG9vcFNlcnZpY2UsIE1lZGlhU2VydmljZSwgTmV0d29ya1NlcnZpY2UsXG5cdFx0Ly8gUGFnZVNlcnZpY2UsIFNlcnZpY2VXb3JrZXJTZXJ2aWNlLCBTaGFyZWRTZXJ2aWNlLFxuXHRcdC8vIFN0b3JhZ2VTZXJ2aWNlLCBXZWJOb3RpZmljYXRpb25TZXJ2aWNlLCBXZWJTb2NrZXRTZXJ2aWNlLFxuXHRcdC8qIEVuZCBTZXJ2aWNlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7fVxuIl19