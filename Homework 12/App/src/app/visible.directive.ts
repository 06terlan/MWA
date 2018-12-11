import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class VisibleDirective {
	@Input() isVisible:boolean;
  	constructor() { }
  	@HostBinding('style.display') display;
  	ngOnInit(){ this.display = this.isVisible===true?"block":"none"; }
}
