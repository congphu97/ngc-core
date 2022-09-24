import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import './lodash-mixin';
import { appInitializerFactory } from './loaders/app-initializer-factory';
import { AdjustFontsizeDirective, AspectRatioDirective, AutoFocusDirective, AutoResetDirective, BackButtonDirective, DetectScrollDirective, DisableControlDirective, FullscreenDirective, MaxLessThanDirective, MinGreaterThanDirective, NgInitDirective, NgVarDirective } from './directives';
import { CapitalizeFirstPipe, ClonePipe, CommasPipe, ConvertPercentPipe, EmojiPipe, EmptyPipe, FileSizePipe, FilterPipe, Filter2Pipe, FindPipe, FixedPipe, FlagIconPipe, HourMeridiemPipe, ImagePipe, IncludesPipe, IsContrastPipe, IsFinitePipe, KUnitPipe, LinkPipe, MarkTextPipe, MaxPipe, MinPipe, MomentDatePipe, MomentFromNowPipe, OrderByPipe, PadNumberPipe, Percent2Pipe, SafeHtmlPipe, TimeStringPipe, TimerPipe, TrackByFnPipe, UnitPipe } from './pipes';
import { ApiService, CanDeactivateGuardService, LocaleService, LoopService, MediaService, NetworkService, PageService, ServiceWorkerService, SharedService, StorageService, WebNotificationService, WebSocketService } from './services';
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
        ApiService, CanDeactivateGuardService, LocaleService,
        LoopService, MediaService, NetworkService,
        PageService, ServiceWorkerService, SharedService,
        StorageService, WebNotificationService, WebSocketService,
        /* End Service Inject (Do not remove) */
    ], imports: [[HttpClientModule, RouterModule, BrowserModule, TranslateModule], BrowserModule, TranslateModule] });
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
                    ApiService, CanDeactivateGuardService, LocaleService,
                    LoopService, MediaService, NetworkService,
                    PageService, ServiceWorkerService, SharedService,
                    StorageService, WebNotificationService, WebSocketService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQ04sdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQ2pFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUM5RCx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFDbEUsdUJBQXVCLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFDeEQsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUNOLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQzFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQ3hDLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUNyQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFDakMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFDekMsY0FBYyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQ3ZDLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUMvQixPQUFPLEVB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LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuXG5pbXBvcnQgJy4vbG9kYXNoLW1peGluJztcbmltcG9ydCB7IGFwcEluaXRpYWxpemVyRmFjdG9yeSB9IGZyb20gJy4vbG9hZGVycy9hcHAtaW5pdGlhbGl6ZXItZmFjdG9yeSc7XG5pbXBvcnQge1xuXHRBZGp1c3RGb250c2l6ZURpcmVjdGl2ZSwgQXNwZWN0UmF0aW9EaXJlY3RpdmUsIEF1dG9Gb2N1c0RpcmVjdGl2ZSxcblx0QXV0b1Jlc2V0RGlyZWN0aXZlLCBCYWNrQnV0dG9uRGlyZWN0aXZlLCBEZXRlY3RTY3JvbGxEaXJlY3RpdmUsXG5cdERpc2FibGVDb250cm9sRGlyZWN0aXZlLCBGdWxsc2NyZWVuRGlyZWN0aXZlLCBNYXhMZXNzVGhhbkRpcmVjdGl2ZSxcblx0TWluR3JlYXRlclRoYW5EaXJlY3RpdmUsIE5nSW5pdERpcmVjdGl2ZSwgTmdWYXJEaXJlY3RpdmVcbn0gZnJvbSAnLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7XG5cdENhcGl0YWxpemVGaXJzdFBpcGUsIENsb25lUGlwZSwgQ29tbWFzUGlwZSxcblx0Q29udmVydFBlcmNlbnRQaXBlLCBFbW9qaVBpcGUsIEVtcHR5UGlwZSxcblx0RmlsZVNpemVQaXBlLCBGaWx0ZXJQaXBlLCBGaWx0ZXIyUGlwZSxcblx0RmluZFBpcGUsIEZpeGVkUGlwZSwgRmxhZ0ljb25QaXBlLFxuXHRIb3VyTWVyaWRpZW1QaXBlLCBJbWFnZVBpcGUsIEluY2x1ZGVzUGlwZSxcblx0SXNDb250cmFzdFBpcGUsIElzRmluaXRlUGlwZSwgS1VuaXRQaXBlLFxuXHRMaW5rUGlwZSwgTWFya1RleHRQaXBlLCBNYXhQaXBlLFxuXHRNaW5QaXBlLCBNb21lbnREYXRlUGlwZSwgTW9tZW50RnJvbU5vd1BpcGUsXG5cdE9yZGVyQnlQaXBlLCBQYWROdW1iZXJQaXBlLCBQZXJjZW50MlBpcGUsXG5cdFNhZmVIdG1sUGlwZSwgVGltZVN0cmluZ1BpcGUsIFRpbWVyUGlwZSxcblx0VHJhY2tCeUZuUGlwZSwgVW5pdFBpcGVcbn0gZnJvbSAnLi9waXBlcyc7XG5pbXBvcnQge1xuXHRBcGlTZXJ2aWNlLCBDYW5EZWFjdGl2YXRlR3VhcmRTZXJ2aWNlLCBMb2NhbGVTZXJ2aWNlLFxuXHRMb29wU2VydmljZSwgTWVkaWFTZXJ2aWNlLCBOZXR3b3JrU2VydmljZSxcblx0UGFnZVNlcnZpY2UsIFNlcnZpY2VXb3JrZXJTZXJ2aWNlLCBTaGFyZWRTZXJ2aWNlLFxuXHRTdG9yYWdlU2VydmljZSwgV2ViTm90aWZpY2F0aW9uU2VydmljZSwgV2ViU29ja2V0U2VydmljZVxufSBmcm9tICcuL3NlcnZpY2VzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogWyBIdHRwQ2xpZW50TW9kdWxlLCBSb3V0ZXJNb2R1bGUsIEJyb3dzZXJNb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZSBdLFxuXHRleHBvcnRzOiBbXG5cdFx0QnJvd3Nlck1vZHVsZSwgVHJhbnNsYXRlTW9kdWxlLFxuXG5cdFx0LyogQ29tcG9uZW50IEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHQvKiBFbmQgQ29tcG9uZW50IEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblxuXHRcdC8qIERpcmVjdGl2ZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0QWRqdXN0Rm9udHNpemVEaXJlY3RpdmUsIEFzcGVjdFJhdGlvRGlyZWN0aXZlLCBBdXRvRm9jdXNEaXJlY3RpdmUsXG5cdFx0QXV0b1Jlc2V0RGlyZWN0aXZlLCBCYWNrQnV0dG9uRGlyZWN0aXZlLCBEZXRlY3RTY3JvbGxEaXJlY3RpdmUsXG5cdFx0RGlzYWJsZUNvbnRyb2xEaXJlY3RpdmUsIEZ1bGxzY3JlZW5EaXJlY3RpdmUsIE1heExlc3NUaGFuRGlyZWN0aXZlLFxuXHRcdE1pbkdyZWF0ZXJUaGFuRGlyZWN0aXZlLCBOZ0luaXREaXJlY3RpdmUsIE5nVmFyRGlyZWN0aXZlLFxuXHRcdC8qIEVuZCBEaXJlY3RpdmUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG5cdFx0LyogUGlwZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0Q2FwaXRhbGl6ZUZpcnN0UGlwZSwgQ2xvbmVQaXBlLCBDb21tYXNQaXBlLFxuXHRcdENvbnZlcnRQZXJjZW50UGlwZSwgRW1vamlQaXBlLCBFbXB0eVBpcGUsXG5cdFx0RmlsZVNpemVQaXBlLCBGaWx0ZXJQaXBlLCBGaWx0ZXIyUGlwZSxcblx0XHRGaW5kUGlwZSwgRml4ZWRQaXBlLCBGbGFnSWNvblBpcGUsXG5cdFx0SG91ck1lcmlkaWVtUGlwZSwgSW1hZ2VQaXBlLCBJbmNsdWRlc1BpcGUsXG5cdFx0SXNDb250cmFzdFBpcGUsIElzRmluaXRlUGlwZSwgS1VuaXRQaXBlLFxuXHRcdExpbmtQaXBlLCBNYXJrVGV4dFBpcGUsIE1heFBpcGUsXG5cdFx0TWluUGlwZSwgTW9tZW50RGF0ZVBpcGUsIE1vbWVudEZyb21Ob3dQaXBlLFxuXHRcdE9yZGVyQnlQaXBlLCBQYWROdW1iZXJQaXBlLCBQZXJjZW50MlBpcGUsXG5cdFx0U2FmZUh0bWxQaXBlLCBUaW1lU3RyaW5nUGlwZSwgVGltZXJQaXBlLFxuXHRcdFRyYWNrQnlGblBpcGUsIFVuaXRQaXBlLFxuXHRcdC8qIEVuZCBQaXBlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0LyogQ29tcG9uZW50IEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHQvKiBFbmQgQ29tcG9uZW50IEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblxuXHRcdC8qIERpcmVjdGl2ZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0QWRqdXN0Rm9udHNpemVEaXJlY3RpdmUsIEFzcGVjdFJhdGlvRGlyZWN0aXZlLCBBdXRvRm9jdXNEaXJlY3RpdmUsXG5cdFx0QXV0b1Jlc2V0RGlyZWN0aXZlLCBCYWNrQnV0dG9uRGlyZWN0aXZlLCBEZXRlY3RTY3JvbGxEaXJlY3RpdmUsXG5cdFx0RGlzYWJsZUNvbnRyb2xEaXJlY3RpdmUsIEZ1bGxzY3JlZW5EaXJlY3RpdmUsIE1heExlc3NUaGFuRGlyZWN0aXZlLFxuXHRcdE1pbkdyZWF0ZXJUaGFuRGlyZWN0aXZlLCBOZ0luaXREaXJlY3RpdmUsIE5nVmFyRGlyZWN0aXZlLFxuXHRcdC8qIEVuZCBEaXJlY3RpdmUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG5cdFx0LyogUGlwZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0Q2FwaXRhbGl6ZUZpcnN0UGlwZSwgQ2xvbmVQaXBlLCBDb21tYXNQaXBlLFxuXHRcdENvbnZlcnRQZXJjZW50UGlwZSwgRW1vamlQaXBlLCBFbXB0eVBpcGUsXG5cdFx0RmlsZVNpemVQaXBlLCBGaWx0ZXJQaXBlLCBGaWx0ZXIyUGlwZSxcblx0XHRGaW5kUGlwZSwgRml4ZWRQaXBlLCBGbGFnSWNvblBpcGUsXG5cdFx0SG91ck1lcmlkaWVtUGlwZSwgSW1hZ2VQaXBlLCBJbmNsdWRlc1BpcGUsXG5cdFx0SXNDb250cmFzdFBpcGUsIElzRmluaXRlUGlwZSwgS1VuaXRQaXBlLFxuXHRcdExpbmtQaXBlLCBNYXJrVGV4dFBpcGUsIE1heFBpcGUsXG5cdFx0TWluUGlwZSwgTW9tZW50RGF0ZVBpcGUsIE1vbWVudEZyb21Ob3dQaXBlLFxuXHRcdE9yZGVyQnlQaXBlLCBQYWROdW1iZXJQaXBlLCBQZXJjZW50MlBpcGUsXG5cdFx0U2FmZUh0bWxQaXBlLCBUaW1lU3RyaW5nUGlwZSwgVGltZXJQaXBlLFxuXHRcdFRyYWNrQnlGblBpcGUsIFVuaXRQaXBlLFxuXHRcdC8qIEVuZCBQaXBlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZVx0XHQ6IEFQUF9JTklUSUFMSVpFUixcblx0XHRcdHVzZUZhY3RvcnlcdDogYXBwSW5pdGlhbGl6ZXJGYWN0b3J5LFxuXHRcdFx0ZGVwc1x0XHQ6IFsgVHJhbnNsYXRlU2VydmljZSwgTG9jYWxlU2VydmljZSwgSW5qZWN0b3IgXSxcblx0XHRcdG11bHRpXHRcdDogdHJ1ZSxcblx0XHR9LFxuXG5cdFx0Q29va2llU2VydmljZSxcblxuXHRcdC8qIFNlcnZpY2UgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdEFwaVNlcnZpY2UsIENhbkRlYWN0aXZhdGVHdWFyZFNlcnZpY2UsIExvY2FsZVNlcnZpY2UsXG5cdFx0TG9vcFNlcnZpY2UsIE1lZGlhU2VydmljZSwgTmV0d29ya1NlcnZpY2UsXG5cdFx0UGFnZVNlcnZpY2UsIFNlcnZpY2VXb3JrZXJTZXJ2aWNlLCBTaGFyZWRTZXJ2aWNlLFxuXHRcdFN0b3JhZ2VTZXJ2aWNlLCBXZWJOb3RpZmljYXRpb25TZXJ2aWNlLCBXZWJTb2NrZXRTZXJ2aWNlLFxuXHRcdC8qIEVuZCBTZXJ2aWNlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7fVxuIl19