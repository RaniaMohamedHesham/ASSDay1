import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsAPIService } from 'src/app/services/products-api.service';
import { IProduct } from 'src/app/View Models/iproduct';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  // public products : IProduct[]=[];
  public grandTotal !: number;
   public ProductList:IProduct[]=[];
 
  constructor(private cartService:CartService,
    private prdServiceList:ProductsAPIService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })



    this.prdServiceList.getAllProducts().subscribe(prdList=>{
      this.ProductList=prdList;
      console.log(this.ProductList);
    });
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }



  


}
