import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

import {
	AdjustFontsizeDirective, AspectRatioDirective, AutoFocusDirective,
	AutoResetDirective, BackButtonDirective, DetectScrollDirective,
	DisableControlDirective, FullscreenDirective, MaxLessThanDirective,
	MinGreaterThanDirective, NgInitDirective, NgVarDirective
} from './directives';
import './lodash-mixin';
import {
	CapitalizeFirstPipe, ClonePipe, CommasPipe,
	ConvertPercentPipe, EmojiPipe, EmptyPipe,
	FileSizePipe,
	Filter2Pipe,
	FilterPipe,
	FindPipe, FixedPipe, FlagIconPipe,
	HourMeridiemPipe, ImagePipe, IncludesPipe,
	IsContrastPipe, IsFinitePipe, KUnitPipe,
	LinkPipe, MarkTextPipe, MaxPipe,
	MinPipe, MomentDatePipe, MomentFromNowPipe,
	OrderByPipe, PadNumberPipe, Percent2Pipe,
	SafeHtmlPipe, TimeStringPipe, TimerPipe,
	TrackByFnPipe, UnitPipe
} from './pipes';

@NgModule({
	imports: [ HttpClientModule, RouterModule, BrowserModule, TranslateModule ],
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
})
export class CoreModule {}
