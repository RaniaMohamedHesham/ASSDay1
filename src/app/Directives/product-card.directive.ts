import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {


  highlightcolor:string="grey";
 defaultcolor:string="darkgray"

  constructor(private elemRef:ElementRef) { 
 
  elemRef.nativeElement.style.boxShadow=`1px 1px 5px 5px ${this.defaultcolor}`;

  }
  @HostListener('mouseenter')onMouseEnter()
  {
    this.elemRef.nativeElement.style.boxShadow=`20px 20px 50px 15px ${this.highlightcolor}`;
  }
  @HostListener('mouseout')onMouseOut()
  {

   this.elemRef.nativeElement.style.boxShadow=`1px 1px 5px 5px ${this.defaultcolor}`;

  }


  
}