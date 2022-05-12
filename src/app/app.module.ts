import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideMeueComponent } from './Components/side-meue/side-meue.component';
import { ProductCardDirective } from './Directives/product-card.directive';
import { FormsModule } from '@angular/forms';
import { EpyptianIDPipe } from './Components/Pipes/epyptian-id.pipe';
import { CreditCardPipe } from './Components/Pipes/credit-card.pipe';
import { OrderComponent } from './Components/order/order.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { MainlayoutComponent } from './Components/mainlayout/mainlayout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponentComponent } from './Components/not-found-component/not-found-component.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { HomeComponent } from './Components/home/home.component'
//import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SideMeueComponent,
    ProductCardDirective,
    EpyptianIDPipe,
    CreditCardPipe,
    OrderComponent,
    ContactUsComponent,
    AboutusComponent,
    MainlayoutComponent,
    ProductDetailsComponent,
    NotFoundComponentComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent,
    HomeComponent,
   // StoreComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
