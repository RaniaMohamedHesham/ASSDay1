import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../View Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiServiceService {

  constructor(private httpClient:HttpClient) { }


  getAllCategories():Observable<ICategory[]>
  {
    // return this.httpClient.get<ICategory[]>('http://localhost:3000/category');

    return this.httpClient.get<ICategory[]>('http://localhost:39722/api/Category');

  }
}
