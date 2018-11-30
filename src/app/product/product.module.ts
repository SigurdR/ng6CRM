import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  declarations: [ProductListComponent, ProductEditComponent, ProductDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
