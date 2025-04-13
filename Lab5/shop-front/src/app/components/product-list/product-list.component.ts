import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: any[] = [];
  @Output() remove = new EventEmitter<any>();
  @Output() like = new EventEmitter<any>();

  onRemove(product: any) {
    this.remove.emit(product);
  }

  onLike(product: any) {
    this.like.emit(product);
  }
}
