import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* State Management */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { cartReducer } from './_store/cart.reducer';
/* State Management */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './public/category/category.component';
import { HomeComponent } from './public/home/home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { SigninComponent } from './public/signin/signin.component';
import { SignupComponent } from './public/signup/signup.component';
import { CartComponent } from './private/cart/cart.component';
import { FooterComponent } from './private/common/footer/footer.component';
import { HeaderComponent } from './private/common/header/header.component';
import { SubcategoryComponent } from './public/subcategory/subcategory.component';
import { SpecificComponent } from './private/specific/specific.component';
import { WishlistComponent } from './private/wishlist/wishlist.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    PageNotFoundComponent,
    SigninComponent,
    SignupComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    SubcategoryComponent,
    SpecificComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
     StoreModule.forRoot({
      cart: cartReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
