import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(v: string): string {
    if(v!=""){
    return v.charAt(0)+ v.charAt(1)+ v.charAt(2)+ v.charAt(3)+"-"+
    v.charAt(4)+ v.charAt(5)+ v.charAt(6)+ v.charAt(7)+"-"+
    v.charAt(8)+ v.charAt(9)+ v.charAt(10)+ v.charAt(11)+"-"+
    v.charAt(12)+ v.charAt(13)+ v.charAt(14)+ v.charAt(15);
    }
    return "";
  }

}
