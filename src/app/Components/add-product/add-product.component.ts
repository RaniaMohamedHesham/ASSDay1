import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryApiServiceService } from 'src/app/services/category-api-service.service';
import { ProductsAPIService } from 'src/app/services/products-api.service';
import { ICategory } from 'src/app/View Models/icategory';
import { IProduct } from 'src/app/View Models/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  newPrd:IProduct={} as IProduct;
  catList: ICategory[]=[];

  constructor(private prdApiService:ProductsAPIService,
    private catApiService:CategoryApiServiceService,
    private router:Router) { 
    // this.newPrd={
    //   ID:6,
    //   Name:'New Mobile From API',
    //   Price:150,
    //   Quantity:15,
    //   Img:'https://th.bing.com/th/id/R.a3e66e277ec9f116e00d1f81ccd3b5cc?rik=t77vZrRIa9TThQ&pid=ImgRaw&r=0',
    //   CategoryID: 2
    // }

                // this.catList=[
                //   {id:1, name: 'Laptop'},
                
                //   {id:3, name:'Mobiles'}
                // ];
  }

  ngOnInit(): void {

    this.catApiService.getAllCategories().subscribe(cateList=>{
                this.catList=cateList;
              });
  }

  
  
          saveProduct()
          {
            this.prdApiService.AddnewProduct(this.newPrd).subscribe(prd=>{
              this.router.navigate(['/Order']);
            });
          }



}
