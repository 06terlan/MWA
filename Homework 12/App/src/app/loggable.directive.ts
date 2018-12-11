import { Directive, HostListener } from '@angular/core';

@Directive({
	selector: '[loggable]'
})
export class LoggableDirective{
	@HostListener('dblclick') doubleClick(){
		console.log('Element has been clicked.');
	}
}