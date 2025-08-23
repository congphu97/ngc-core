import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { AdjustFontsizeDirective, AspectRatioDirective, AutoFocusDirective, AutoResetDirective, BackButtonDirective, DetectScrollDirective, DisableControlDirective, FullscreenDirective, MaxLessThanDirective, MinGreaterThanDirective, NgInitDirective, NgVarDirective } from './directives';
import './lodash-mixin';
import { CapitalizeFirstPipe, ClonePipe, CommasPipe, ConvertPercentPipe, EmojiPipe, EmptyPipe, FileSizePipe, Filter2Pipe, FilterPipe, FindPipe, FixedPipe, FlagIconPipe, HourMeridiemPipe, ImagePipe, IncludesPipe, IsContrastPipe, IsFinitePipe, KUnitPipe, LinkPipe, MarkTextPipe, MaxPipe, MinPipe, MomentDatePipe, MomentFromNowPipe, OrderByPipe, PadNumberPipe, Percent2Pipe, SafeHtmlPipe, TimeStringPipe, TimerPipe, TrackByFnPipe, UnitPipe } from './pipes';
import * as i0 from "@angular/core";
export class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        // {
        // 	provide		: APP_INITIALIZER,
        // 	useFactory	: appInitializerFactory,
        // 	deps		: [ TranslateService, LocaleService, Injector ],
        // 	multi		: true,
        // },
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
                    // {
                    // 	provide		: APP_INITIALIZER,
                    // 	useFactory	: appInitializerFactory,
                    // 	deps		: [ TranslateService, LocaleService, Injector ],
                    // 	multi		: true,
                    // },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFDTix1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFDakUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQzlELHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUNsRSx1QkFBdUIsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUN4RCxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFDTixtQkFBbUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUMxQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUN4QyxZQUFZLEVBQ1osV0FBVyxFQUNYLFVBQVUsRUFDVixRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFDakMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFDekMsY0FBYyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQ3ZDLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUMvQixPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUMxQyxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFDeEMsWUFBWSxFQUFFLGNBQWMsRUFBRSxT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QUFFLFNBQVMsRUFBRSxVQUFVO1FBQzFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxTQUFTO1FBQ3hDLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVztRQUNyQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVk7UUFDakMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFlBQVk7UUFDekMsY0FBYyxFQUFFLFlBQVksRUFBRSxTQUFTO1FBQ3ZDLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTztRQUMvQixPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQjtRQUMxQyxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVk7UUFDeEMsWUFBWSxFQUFFLGNBQWMsRUFBRSxTQUFTO1FBQ3ZDLGFBQWEsRUFBRSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcblxuaW1wb3J0IHtcblx0QWRqdXN0Rm9udHNpemVEaXJlY3RpdmUsIEFzcGVjdFJhdGlvRGlyZWN0aXZlLCBBdXRvRm9jdXNEaXJlY3RpdmUsXG5cdEF1dG9SZXNldERpcmVjdGl2ZSwgQmFja0J1dHRvbkRpcmVjdGl2ZSwgRGV0ZWN0U2Nyb2xsRGlyZWN0aXZlLFxuXHREaXNhYmxlQ29udHJvbERpcmVjdGl2ZSwgRnVsbHNjcmVlbkRpcmVjdGl2ZSwgTWF4TGVzc1RoYW5EaXJlY3RpdmUsXG5cdE1pbkdyZWF0ZXJUaGFuRGlyZWN0aXZlLCBOZ0luaXREaXJlY3RpdmUsIE5nVmFyRGlyZWN0aXZlXG59IGZyb20gJy4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgJy4vbG9kYXNoLW1peGluJztcbmltcG9ydCB7XG5cdENhcGl0YWxpemVGaXJzdFBpcGUsIENsb25lUGlwZSwgQ29tbWFzUGlwZSxcblx0Q29udmVydFBlcmNlbnRQaXBlLCBFbW9qaVBpcGUsIEVtcHR5UGlwZSxcblx0RmlsZVNpemVQaXBlLFxuXHRGaWx0ZXIyUGlwZSxcblx0RmlsdGVyUGlwZSxcblx0RmluZFBpcGUsIEZpeGVkUGlwZSwgRmxhZ0ljb25QaXBlLFxuXHRIb3VyTWVyaWRpZW1QaXBlLCBJbWFnZVBpcGUsIEluY2x1ZGVzUGlwZSxcblx0SXNDb250cmFzdFBpcGUsIElzRmluaXRlUGlwZSwgS1VuaXRQaXBlLFxuXHRMaW5rUGlwZSwgTWFya1RleHRQaXBlLCBNYXhQaXBlLFxuXHRNaW5QaXBlLCBNb21lbnREYXRlUGlwZSwgTW9tZW50RnJvbU5vd1BpcGUsXG5cdE9yZGVyQnlQaXBlLCBQYWROdW1iZXJQaXBlLCBQZXJjZW50MlBpcGUsXG5cdFNhZmVIdG1sUGlwZSwgVGltZVN0cmluZ1BpcGUsIFRpbWVyUGlwZSxcblx0VHJhY2tCeUZuUGlwZSwgVW5pdFBpcGVcbn0gZnJvbSAnLi9waXBlcyc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFsgSHR0cENsaWVudE1vZHVsZSwgUm91dGVyTW9kdWxlLCBCcm93c2VyTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGUgXSxcblx0ZXhwb3J0czogW1xuXHRcdEJyb3dzZXJNb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZSxcblxuXHRcdC8qIENvbXBvbmVudCBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0LyogRW5kIENvbXBvbmVudCBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cblx0XHQvKiBEaXJlY3RpdmUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdEFkanVzdEZvbnRzaXplRGlyZWN0aXZlLCBBc3BlY3RSYXRpb0RpcmVjdGl2ZSwgQXV0b0ZvY3VzRGlyZWN0aXZlLFxuXHRcdEF1dG9SZXNldERpcmVjdGl2ZSwgQmFja0J1dHRvbkRpcmVjdGl2ZSwgRGV0ZWN0U2Nyb2xsRGlyZWN0aXZlLFxuXHRcdERpc2FibGVDb250cm9sRGlyZWN0aXZlLCBGdWxsc2NyZWVuRGlyZWN0aXZlLCBNYXhMZXNzVGhhbkRpcmVjdGl2ZSxcblx0XHRNaW5HcmVhdGVyVGhhbkRpcmVjdGl2ZSwgTmdJbml0RGlyZWN0aXZlLCBOZ1ZhckRpcmVjdGl2ZSxcblx0XHQvKiBFbmQgRGlyZWN0aXZlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblxuXHRcdC8qIFBpcGUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdENhcGl0YWxpemVGaXJzdFBpcGUsIENsb25lUGlwZSwgQ29tbWFzUGlwZSxcblx0XHRDb252ZXJ0UGVyY2VudFBpcGUsIEVtb2ppUGlwZSwgRW1wdHlQaXBlLFxuXHRcdEZpbGVTaXplUGlwZSwgRmlsdGVyUGlwZSwgRmlsdGVyMlBpcGUsXG5cdFx0RmluZFBpcGUsIEZpeGVkUGlwZSwgRmxhZ0ljb25QaXBlLFxuXHRcdEhvdXJNZXJpZGllbVBpcGUsIEltYWdlUGlwZSwgSW5jbHVkZXNQaXBlLFxuXHRcdElzQ29udHJhc3RQaXBlLCBJc0Zpbml0ZVBpcGUsIEtVbml0UGlwZSxcblx0XHRMaW5rUGlwZSwgTWFya1RleHRQaXBlLCBNYXhQaXBlLFxuXHRcdE1pblBpcGUsIE1vbWVudERhdGVQaXBlLCBNb21lbnRGcm9tTm93UGlwZSxcblx0XHRPcmRlckJ5UGlwZSwgUGFkTnVtYmVyUGlwZSwgUGVyY2VudDJQaXBlLFxuXHRcdFNhZmVIdG1sUGlwZSwgVGltZVN0cmluZ1BpcGUsIFRpbWVyUGlwZSxcblx0XHRUcmFja0J5Rm5QaXBlLCBVbml0UGlwZSxcblx0XHQvKiBFbmQgUGlwZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC8qIENvbXBvbmVudCBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0LyogRW5kIENvbXBvbmVudCBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cblx0XHQvKiBEaXJlY3RpdmUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdEFkanVzdEZvbnRzaXplRGlyZWN0aXZlLCBBc3BlY3RSYXRpb0RpcmVjdGl2ZSwgQXV0b0ZvY3VzRGlyZWN0aXZlLFxuXHRcdEF1dG9SZXNldERpcmVjdGl2ZSwgQmFja0J1dHRvbkRpcmVjdGl2ZSwgRGV0ZWN0U2Nyb2xsRGlyZWN0aXZlLFxuXHRcdERpc2FibGVDb250cm9sRGlyZWN0aXZlLCBGdWxsc2NyZWVuRGlyZWN0aXZlLCBNYXhMZXNzVGhhbkRpcmVjdGl2ZSxcblx0XHRNaW5HcmVhdGVyVGhhbkRpcmVjdGl2ZSwgTmdJbml0RGlyZWN0aXZlLCBOZ1ZhckRpcmVjdGl2ZSxcblx0XHQvKiBFbmQgRGlyZWN0aXZlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblxuXHRcdC8qIFBpcGUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdENhcGl0YWxpemVGaXJzdFBpcGUsIENsb25lUGlwZSwgQ29tbWFzUGlwZSxcblx0XHRDb252ZXJ0UGVyY2VudFBpcGUsIEVtb2ppUGlwZSwgRW1wdHlQaXBlLFxuXHRcdEZpbGVTaXplUGlwZSwgRmlsdGVyUGlwZSwgRmlsdGVyMlBpcGUsXG5cdFx0RmluZFBpcGUsIEZpeGVkUGlwZSwgRmxhZ0ljb25QaXBlLFxuXHRcdEhvdXJNZXJpZGllbVBpcGUsIEltYWdlUGlwZSwgSW5jbHVkZXNQaXBlLFxuXHRcdElzQ29udHJhc3RQaXBlLCBJc0Zpbml0ZVBpcGUsIEtVbml0UGlwZSxcblx0XHRMaW5rUGlwZSwgTWFya1RleHRQaXBlLCBNYXhQaXBlLFxuXHRcdE1pblBpcGUsIE1vbWVudERhdGVQaXBlLCBNb21lbnRGcm9tTm93UGlwZSxcblx0XHRPcmRlckJ5UGlwZSwgUGFkTnVtYmVyUGlwZSwgUGVyY2VudDJQaXBlLFxuXHRcdFNhZmVIdG1sUGlwZSwgVGltZVN0cmluZ1BpcGUsIFRpbWVyUGlwZSxcblx0XHRUcmFja0J5Rm5QaXBlLCBVbml0UGlwZSxcblx0XHQvKiBFbmQgUGlwZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdC8vIHtcblx0XHQvLyBcdHByb3ZpZGVcdFx0OiBBUFBfSU5JVElBTElaRVIsXG5cdFx0Ly8gXHR1c2VGYWN0b3J5XHQ6IGFwcEluaXRpYWxpemVyRmFjdG9yeSxcblx0XHQvLyBcdGRlcHNcdFx0OiBbIFRyYW5zbGF0ZVNlcnZpY2UsIExvY2FsZVNlcnZpY2UsIEluamVjdG9yIF0sXG5cdFx0Ly8gXHRtdWx0aVx0XHQ6IHRydWUsXG5cdFx0Ly8gfSxcblxuXHRcdENvb2tpZVNlcnZpY2UsXG5cblx0XHQvKiBTZXJ2aWNlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHQvLyBBcGlTZXJ2aWNlLCBDYW5EZWFjdGl2YXRlR3VhcmRTZXJ2aWNlLCBMb2NhbGVTZXJ2aWNlLFxuXHRcdC8vIExvb3BTZXJ2aWNlLCBNZWRpYVNlcnZpY2UsIE5ldHdvcmtTZXJ2aWNlLFxuXHRcdC8vIFBhZ2VTZXJ2aWNlLCBTZXJ2aWNlV29ya2VyU2VydmljZSwgU2hhcmVkU2VydmljZSxcblx0XHQvLyBTdG9yYWdlU2VydmljZSwgV2ViTm90aWZpY2F0aW9uU2VydmljZSwgV2ViU29ja2V0U2VydmljZSxcblx0XHQvKiBFbmQgU2VydmljZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge31cbiJdfQ==