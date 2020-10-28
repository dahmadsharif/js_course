import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { CategoryComponent } from './public/category/category.component';
import { SubcategoryComponent } from './public/subcategory/subcategory.component';
import { SpecificComponent } from './private/specific/specific.component';
import { CartComponent } from './private/cart/cart.component';
import { WishlistComponent } from './private/wishlist/wishlist.component';
import { SigninComponent } from './public/signin/signin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent, pathMatch: 'full' },
  { path: 'wishlist', component: WishlistComponent, pathMatch: 'full' },
  { path: 'login', component: SigninComponent, pathMatch: 'full' },
  { path: ':categoryName', component: CategoryComponent, pathMatch: 'full' },
  { path: ':categoryName/:subcategoryName', component: SubcategoryComponent, pathMatch: 'full' },
  { path: ':categoryName/:subcategoryName/:specificId', component: SpecificComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
