import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector:'[my-error]'
})

export class FocusInputDirective{
    constructor(elr:ElementRef){
        elr.nativeElement.focus()
    }
}