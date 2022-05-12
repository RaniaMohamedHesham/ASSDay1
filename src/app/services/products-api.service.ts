import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../View Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsAPIService {

  private httpOptions;

  constructor( private httpClient:HttpClient) {

    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'Application/Json'
        // ,'Authorization':'Token'
      })
    }
   }

 
  

  getAllProducts():Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.ApiBaseUrl}/api/product`);
    // return this.httpClient.get<IProduct[]>('http://localhost:39722/api/Product');
  }



  getProductsByCateogryID(catID: number): Observable<IProduct[]>
  {
    // return this.httpClient.get<IProduct[]>(`${environment.ApiBaseUrl}/api/product?CategoryID=${catID}`);
    // return this.httpClient.get<IProduct[]>(`http://localhost:39722/api/Product?categoryID=${catID}`);
    if(catID==0){
      return this.httpClient.get<IProduct[]>(`${environment.ApiBaseUrl}/api/Product`)
    }
    else{
    return this.httpClient.get<IProduct[]>(`${environment.ApiBaseUrl}/api/Product/Catid?catID=${catID}`);
    }

  }





  getProductsByID(prdID: number): Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.ApiBaseUrl}/api/product/${prdID}`);
    // return this.httpClient.get<IProduct>(`http://localhost:39722/api/Product/${prdID}`);

  }

  AddnewProduct(newPrd:IProduct):Observable<IProduct>
  {
    return this.httpClient.post<IProduct>(`${environment.ApiBaseUrl}/api/product`,JSON.stringify(newPrd),this.httpOptions);
    // return this.httpClient.post<IProduct>('http://localhost:39722/api/Product',JSON.stringify(newPrd),this.httpOptions);

  }

}
