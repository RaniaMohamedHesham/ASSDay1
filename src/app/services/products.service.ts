import { Injectable } from '@angular/core';
import { IProduct } from '../View Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
//  private productlist:IProduct[];
  constructor() { 

    // this.productlist=[
    //   {
    //    ID:3,
    //    Name:"Samsung",
    //    Quantity:5,
    //    Price:46700,
    //    Img:"https://clipground.com/images/sony-mobile-clipart-6.jpg",
    //    CategoryID:1

    //   },

    //   {
    //     ID:6,
    //    Name:"Nokia",
    //    Quantity:11,
    //    Price:64553,
    //    Img:"https://th.bing.com/th/id/R.3551f4650f0a57b5b3bfdd2c73f51225?rik=5DWwx2tEREviCw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f1%2fMobile-PNG-Pic.png&ehk=0I9GDrwgGTtZLKSaBgKqf84uLLN6M%2b6tXy0QJ4uDX2w%3d&risl=&pid=ImgRaw&r=0",
    //    CategoryID:1,
    //   },

    //   {
    //     ID:10,
    //    Name:"Huawi",
    //    Quantity:8,
    //    Price:78965,
    //    Img:"https://i.vippng.com/png/small/223-2236481_get-it-now-cellphone-transparent-background.png",
    //    CategoryID:2

    //   },
      
    //   {
    //     ID:15,
    //     Name:"Iphone",
    //     Quantity:9,
    //     Price:18000,
    //     Img:"https://ae01.alicdn.com/kf/Hbe41ad9bbeae439580c23e3a93a53402W.jpg_q50.jpg" ,
    //     CategoryID:2
    //   }
      
    // ];
  }

  // getProductsByCateogryID(catID: number): IProduct[] {
  //   if (catID == 0) {
  //     return this.productlist;
  //   }
  //   else
  //     return this.productlist.filter(prd => prd.CategoryID == catID);
  // }

  // getProductByID(prdID: number): IProduct|undefined
  // {
  //   return this.productlist.find(prd=>prd.ID==prdID);
  // }

  // getListOfID():number[]
  // {
  //   return this.productlist.map(prd=>prd.ID);
  // }
  
}
