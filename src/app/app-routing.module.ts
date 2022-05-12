import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundError } from 'rxjs';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { CartComponent } from './Components/cart/cart.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainlayoutComponent } from './Components/mainlayout/mainlayout.component';
import { NotFoundComponentComponent } from './Components/not-found-component/not-found-component.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  
   
   {path: '', component:MainlayoutComponent, children: [
    {path:'', redirectTo:'/Order', pathMatch:'full'},
    {path:'Products', component:ProductsComponent}, 
    {path:'Order', component:OrderComponent},
    {path:'Products/:pid', component:ProductDetailsComponent},

    {path:'contact', component:ContactUsComponent},
    {path:'about', component:AboutusComponent},
    {path:'AddProduct', component:AddProductComponent},
    {path:'Home', component:HomeComponent},


  ]
},
  {path:'cart', component:CartComponent},
  {path:'Login', component:LoginComponent},

  {path:'Register', component:RegisterComponent},

  {path:'**', component:NotFoundComponentComponent}

   ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
