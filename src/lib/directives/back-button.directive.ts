import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({ selector: '[backButton]', exportAs: 'backButton' })
export class BackButtonDirective {

	/**
	 * @constructor
	 * @param {Location} _location
	 */
	constructor( private _location: Location ) {}

	@HostListener( 'click' )
	public triggerClick() {
		this._location.back();
	}

}
