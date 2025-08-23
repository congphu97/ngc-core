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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQ04sdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQ2pFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUM5RCx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFDbEUsdUJBQXVCLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFDeEQsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUNOLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQzFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQ3hDLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUNyQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFDakMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFDekMsY0FBYyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQ3ZDLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUMvQixPQUFPLEVB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IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5cbmltcG9ydCAnLi9sb2Rhc2gtbWl4aW4nO1xuaW1wb3J0IHsgYXBwSW5pdGlhbGl6ZXJGYWN0b3J5IH0gZnJvbSAnLi9sb2FkZXJzL2FwcC1pbml0aWFsaXplci1mYWN0b3J5JztcbmltcG9ydCB7XG5cdEFkanVzdEZvbnRzaXplRGlyZWN0aXZlLCBBc3BlY3RSYXRpb0RpcmVjdGl2ZSwgQXV0b0ZvY3VzRGlyZWN0aXZlLFxuXHRBdXRvUmVzZXREaXJlY3RpdmUsIEJhY2tCdXR0b25EaXJlY3RpdmUsIERldGVjdFNjcm9sbERpcmVjdGl2ZSxcblx0RGlzYWJsZUNvbnRyb2xEaXJlY3RpdmUsIEZ1bGxzY3JlZW5EaXJlY3RpdmUsIE1heExlc3NUaGFuRGlyZWN0aXZlLFxuXHRNaW5HcmVhdGVyVGhhbkRpcmVjdGl2ZSwgTmdJbml0RGlyZWN0aXZlLCBOZ1ZhckRpcmVjdGl2ZVxufSBmcm9tICcuL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHtcblx0Q2FwaXRhbGl6ZUZpcnN0UGlwZSwgQ2xvbmVQaXBlLCBDb21tYXNQaXBlLFxuXHRDb252ZXJ0UGVyY2VudFBpcGUsIEVtb2ppUGlwZSwgRW1wdHlQaXBlLFxuXHRGaWxlU2l6ZVBpcGUsIEZpbHRlclBpcGUsIEZpbHRlcjJQaXBlLFxuXHRGaW5kUGlwZSwgRml4ZWRQaXBlLCBGbGFnSWNvblBpcGUsXG5cdEhvdXJNZXJpZGllbVBpcGUsIEltYWdlUGlwZSwgSW5jbHVkZXNQaXBlLFxuXHRJc0NvbnRyYXN0UGlwZSwgSXNGaW5pdGVQaXBlLCBLVW5pdFBpcGUsXG5cdExpbmtQaXBlLCBNYXJrVGV4dFBpcGUsIE1heFBpcGUsXG5cdE1pblBpcGUsIE1vbWVudERhdGVQaXBlLCBNb21lbnRGcm9tTm93UGlwZSxcblx0T3JkZXJCeVBpcGUsIFBhZE51bWJlclBpcGUsIFBlcmNlbnQyUGlwZSxcblx0U2FmZUh0bWxQaXBlLCBUaW1lU3RyaW5nUGlwZSwgVGltZXJQaXBlLFxuXHRUcmFja0J5Rm5QaXBlLCBVbml0UGlwZVxufSBmcm9tICcuL3BpcGVzJztcbmltcG9ydCB7XG5cdEFwaVNlcnZpY2UsIENhbkRlYWN0aXZhdGVHdWFyZFNlcnZpY2UsIExvY2FsZVNlcnZpY2UsXG5cdExvb3BTZXJ2aWNlLCBNZWRpYVNlcnZpY2UsIE5ldHdvcmtTZXJ2aWNlLFxuXHRQYWdlU2VydmljZSwgU2VydmljZVdvcmtlclNlcnZpY2UsIFNoYXJlZFNlcnZpY2UsXG5cdFN0b3JhZ2VTZXJ2aWNlLCBXZWJOb3RpZmljYXRpb25TZXJ2aWNlLCBXZWJTb2NrZXRTZXJ2aWNlXG59IGZyb20gJy4vc2VydmljZXMnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbIEh0dHBDbGllbnRNb2R1bGUsIFJvdXRlck1vZHVsZSwgQnJvd3Nlck1vZHVsZSwgVHJhbnNsYXRlTW9kdWxlIF0sXG5cdGV4cG9ydHM6IFtcblx0XHRCcm93c2VyTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGUsXG5cblx0XHQvKiBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdC8qIEVuZCBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG5cdFx0LyogRGlyZWN0aXZlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHRBZGp1c3RGb250c2l6ZURpcmVjdGl2ZSwgQXNwZWN0UmF0aW9EaXJlY3RpdmUsIEF1dG9Gb2N1c0RpcmVjdGl2ZSxcblx0XHRBdXRvUmVzZXREaXJlY3RpdmUsIEJhY2tCdXR0b25EaXJlY3RpdmUsIERldGVjdFNjcm9sbERpcmVjdGl2ZSxcblx0XHREaXNhYmxlQ29udHJvbERpcmVjdGl2ZSwgRnVsbHNjcmVlbkRpcmVjdGl2ZSwgTWF4TGVzc1RoYW5EaXJlY3RpdmUsXG5cdFx0TWluR3JlYXRlclRoYW5EaXJlY3RpdmUsIE5nSW5pdERpcmVjdGl2ZSwgTmdWYXJEaXJlY3RpdmUsXG5cdFx0LyogRW5kIERpcmVjdGl2ZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cblx0XHQvKiBQaXBlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHRDYXBpdGFsaXplRmlyc3RQaXBlLCBDbG9uZVBpcGUsIENvbW1hc1BpcGUsXG5cdFx0Q29udmVydFBlcmNlbnRQaXBlLCBFbW9qaVBpcGUsIEVtcHR5UGlwZSxcblx0XHRGaWxlU2l6ZVBpcGUsIEZpbHRlclBpcGUsIEZpbHRlcjJQaXBlLFxuXHRcdEZpbmRQaXBlLCBGaXhlZFBpcGUsIEZsYWdJY29uUGlwZSxcblx0XHRIb3VyTWVyaWRpZW1QaXBlLCBJbWFnZVBpcGUsIEluY2x1ZGVzUGlwZSxcblx0XHRJc0NvbnRyYXN0UGlwZSwgSXNGaW5pdGVQaXBlLCBLVW5pdFBpcGUsXG5cdFx0TGlua1BpcGUsIE1hcmtUZXh0UGlwZSwgTWF4UGlwZSxcblx0XHRNaW5QaXBlLCBNb21lbnREYXRlUGlwZSwgTW9tZW50RnJvbU5vd1BpcGUsXG5cdFx0T3JkZXJCeVBpcGUsIFBhZE51bWJlclBpcGUsIFBlcmNlbnQyUGlwZSxcblx0XHRTYWZlSHRtbFBpcGUsIFRpbWVTdHJpbmdQaXBlLCBUaW1lclBpcGUsXG5cdFx0VHJhY2tCeUZuUGlwZSwgVW5pdFBpcGUsXG5cdFx0LyogRW5kIFBpcGUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQvKiBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdC8qIEVuZCBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG5cdFx0LyogRGlyZWN0aXZlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHRBZGp1c3RGb250c2l6ZURpcmVjdGl2ZSwgQXNwZWN0UmF0aW9EaXJlY3RpdmUsIEF1dG9Gb2N1c0RpcmVjdGl2ZSxcblx0XHRBdXRvUmVzZXREaXJlY3RpdmUsIEJhY2tCdXR0b25EaXJlY3RpdmUsIERldGVjdFNjcm9sbERpcmVjdGl2ZSxcblx0XHREaXNhYmxlQ29udHJvbERpcmVjdGl2ZSwgRnVsbHNjcmVlbkRpcmVjdGl2ZSwgTWF4TGVzc1RoYW5EaXJlY3RpdmUsXG5cdFx0TWluR3JlYXRlclRoYW5EaXJlY3RpdmUsIE5nSW5pdERpcmVjdGl2ZSwgTmdWYXJEaXJlY3RpdmUsXG5cdFx0LyogRW5kIERpcmVjdGl2ZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cblx0XHQvKiBQaXBlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHRDYXBpdGFsaXplRmlyc3RQaXBlLCBDbG9uZVBpcGUsIENvbW1hc1BpcGUsXG5cdFx0Q29udmVydFBlcmNlbnRQaXBlLCBFbW9qaVBpcGUsIEVtcHR5UGlwZSxcblx0XHRGaWxlU2l6ZVBpcGUsIEZpbHRlclBpcGUsIEZpbHRlcjJQaXBlLFxuXHRcdEZpbmRQaXBlLCBGaXhlZFBpcGUsIEZsYWdJY29uUGlwZSxcblx0XHRIb3VyTWVyaWRpZW1QaXBlLCBJbWFnZVBpcGUsIEluY2x1ZGVzUGlwZSxcblx0XHRJc0NvbnRyYXN0UGlwZSwgSXNGaW5pdGVQaXBlLCBLVW5pdFBpcGUsXG5cdFx0TGlua1BpcGUsIE1hcmtUZXh0UGlwZSwgTWF4UGlwZSxcblx0XHRNaW5QaXBlLCBNb21lbnREYXRlUGlwZSwgTW9tZW50RnJvbU5vd1BpcGUsXG5cdFx0T3JkZXJCeVBpcGUsIFBhZE51bWJlclBpcGUsIFBlcmNlbnQyUGlwZSxcblx0XHRTYWZlSHRtbFBpcGUsIFRpbWVTdHJpbmdQaXBlLCBUaW1lclBpcGUsXG5cdFx0VHJhY2tCeUZuUGlwZSwgVW5pdFBpcGUsXG5cdFx0LyogRW5kIFBpcGUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlXHRcdDogQVBQX0lOSVRJQUxJWkVSLFxuXHRcdFx0dXNlRmFjdG9yeVx0OiBhcHBJbml0aWFsaXplckZhY3RvcnksXG5cdFx0XHRkZXBzXHRcdDogWyBUcmFuc2xhdGVTZXJ2aWNlLCBMb2NhbGVTZXJ2aWNlLCBJbmplY3RvciBdLFxuXHRcdFx0bXVsdGlcdFx0OiB0cnVlLFxuXHRcdH0sXG5cblx0XHRDb29raWVTZXJ2aWNlLFxuXG5cdFx0LyogU2VydmljZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0QXBpU2VydmljZSwgQ2FuRGVhY3RpdmF0ZUd1YXJkU2VydmljZSwgTG9jYWxlU2VydmljZSxcblx0XHRMb29wU2VydmljZSwgTWVkaWFTZXJ2aWNlLCBOZXR3b3JrU2VydmljZSxcblx0XHRQYWdlU2VydmljZSwgU2VydmljZVdvcmtlclNlcnZpY2UsIFNoYXJlZFNlcnZpY2UsXG5cdFx0U3RvcmFnZVNlcnZpY2UsIFdlYk5vdGlmaWNhdGlvblNlcnZpY2UsIFdlYlNvY2tldFNlcnZpY2UsXG5cdFx0LyogRW5kIFNlcnZpY2UgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHt9XG4iXX0=