import { Component, OnChanges, OnInit ,SimpleChanges,ViewChild} from '@angular/core';
import { CategoryApiServiceService } from 'src/app/services/category-api-service.service';
import { ProductsAPIService } from 'src/app/services/products-api.service';
import { cart } from 'src/app/View Models/Cart';
import { ICategory } from 'src/app/View Models/icategory';
import { IProduct } from 'src/app/View Models/iproduct';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  
  
})
export class OrderComponent implements OnInit,OnChanges {
  //catList:ICategory[];
  selectedCatID:number=0;
  receiverOrderTotalPrics:number=0;
  ArryCart:cart[]=[];
  totalAmount:number=0;
  MainProductList:IProduct[]=[];
  TotalPrice:number=0;
  catList:ICategory[]=[]

       prodListOfCat:IProduct[]=[];
       

  constructor( private catApiService:CategoryApiServiceService,
     private prdApiService:ProductsAPIService) {
    
    
    // this.catList=[
    //   {ID:1,Name:"Mobiles"},
    //   {ID:2,Name:"LapTop"}];   
    //    }






    
            // this.catList=[
            // {ID:1,Name:"Mobiles"},
            // {ID:2,Name:"LapTop"}];   
   }
  ngOnChanges(changes: SimpleChanges): void {
    
              // this.prdApiService.getProductsByCateogryID(this.selectedCatID).subscribe(prdList=>{
              //   this.prodListOfCat=prdList;
              // });

  }

  ngOnInit(): void {

    this.catApiService.getAllCategories().subscribe(cateList=>{
      this.catList=cateList;
    });
  }

  Remove()
  {
    let index=this.ArryCart.findIndex((x)=>x.productID); 
    this.ArryCart.slice(index,1);
    this.ArryCart.pop();
  }

  AddToParentCart(newitem:cart)
  {
    
    console.log(newitem)
    
    this.ArryCart.push(newitem);
   
    } 
  
    @ViewChild(ProductsComponent) productCom!: ProductsComponent
    Confirmation(){
      this.MainProductList=this.productCom.prodListOfCat

     for(let sub of this.ArryCart){
       for(let main of this.MainProductList){
             if(main.name==sub.productName){
               if(main.quantity>=sub.count){
                 this.TotalPrice+=(sub.count*sub.productPrice)
                 main.quantity-=sub.count
                 


               }else{
                 this.TotalPrice+=(main.quantity*main.price);
                 main.quantity=0;
                 
               }

             }
             
         }
     }
     console.log(this.MainProductList)
     this.ArryCart=[]
     //this.TotalPrice=0;
   
    
   }    
  





  // @ViewChild(ProductsComponent) productCom!: ProductsComponent
  // buy() {
  //   for (const item of this.ArryCart) {
  //     this.totalAmount += item.total;
  //   }
  //   for (const item of this.ArryCart) {
  //     for (const prd of this.productCom.productlist) {
  //       if (item.productName == prd.Name) {
  //         if (prd.Quantity < item.count) {
  //             item.count = prd.Quantity;
  //             prd.Quantity = 0;
  //             this.totalAmount +=item.total;
  //         }
  //         else {
  //           prd.Quantity -= item.count;
  //           this.totalAmount +=item.total;
  //         }
  //       }
  //     }
  //     for (const item of this.ArryCart) {
  //       if(this.ArryCart.length ==0)
  //       {
  //          this.totalAmount =0;
  //       }
  //         this.ArryCart=[];
         
  //     }
  //   }
  // }
}