import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'
import { NavBarComponent } from './navbar/navbar.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { Product } from './product/product.module';
import { Cart } from './cart/cart.module';
import { MainComponent } from './main/main.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CartService } from './cart.service';
import { StoreService } from './store.service';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    WhyUsComponent,
    FooterComponent,
    ProductComponent,
    MainComponent,
    ReviewsComponent,
    InfoComponent
  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent]
})

export class AppModule { }
