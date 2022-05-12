import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsAPIService } from 'src/app/services/products-api.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/View Models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

private curPrdID:number=0
private productIDList:number[]=[];
currprd:IProduct|undefined=undefined;
prd:IProduct={} as IProduct;
  constructor(private activatedRoute:ActivatedRoute,
    private router:Router,
      //private prdService:ProductsService,
     private prdServiceApi:ProductsAPIService,
     private location:Location
    ) { }




  ngOnInit(): void {
  //  this.productIDList=this.prdService.getListOfID();      // return
 
  //    this.activatedRoute.paramMap.subscribe(paramMap=>{
  //     this.curPrdID=Number(paramMap.get("pid"));
  //     this.currprd=this.prdService.getProductByID(this.curPrdID);
  //   });






        // new
           this.curPrdID=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
            this.prdServiceApi.getProductsByID(this.curPrdID).subscribe(prd=>{
              this.currprd=prd;
          });

}

  GoBack()
  {
      this.location.back();
  }

  prevProduct()
  {
     let curIndex=this.productIDList.findIndex((val)=>val==this.curPrdID);
     if(curIndex!=0)
     {
       this.curPrdID=this.productIDList[curIndex-1];
       this.router.navigate(['/Products',this.curPrdID]);
     }
  }

  nextProduct()
  {
    let curIndex=this.productIDList.findIndex((val)=>val==this.curPrdID);

    if(curIndex<this.productIDList.length-1)
    {
      this.curPrdID=this.productIDList[curIndex+1];
      this.router.navigate(['/Products',this.curPrdID]);

    }
  }

  isFirstItem():boolean
  {
    return this.curPrdID==this.productIDList[0];
  }

  isLastItem():boolean
  {
    return this.curPrdID==this.productIDList[ this.productIDList.length-1];
  }

}
