import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list.component';
import { OrderEditComponent } from './order-edit.component';
import { OrderDetailComponent } from './order-detail.component';
import { ProductDialogComponent } from './product-dialog.component';

@NgModule({
  declarations: [OrderListComponent, OrderEditComponent, OrderDetailComponent, ProductDialogComponent],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
