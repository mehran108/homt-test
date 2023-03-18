import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { SliderComponent } from 'src/components/slider/slider.component';
import { CategoryComponent } from 'src/components/category/category.component';
import { ProductListComponent } from 'src/components/product-list/product-list.component';
import { ProductDetailComponent } from 'src/components/product-list/product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NavComponent } from 'src/components/nav/nav.component';

import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    CategoryComponent,
    ProductListComponent,
    ProductDetailComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
