import { Component } from '@angular/core';
import { Product } from './products/product.model';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    {
      name: 'iPhones',
      products: [
        {
          name: 'iPhone 13',
          description: '128GB, Black',
          rating: 4.5,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404',
        },
        {
          name: 'iPhone 13',
          description: '128GB, Black',
          rating: 4.5,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404',
        },
        {
          name: 'iPhone 13',
          description: '128GB, Black',
          rating: 4.5,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404',
        },
        {
          name: 'iPhone 13',
          description: '128GB, Black',
          rating: 4.5,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404',
        },
        {
          name: 'iPhone 13',
          description: '128GB, Black',
          rating: 4.5,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404',
        },
        {
          name: 'iPhone 13',
          description: '128GB, Black',
          rating: 4.5,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404',
        },
      ],
    },
    {
      name: 'Oppo',
      products: [
        {
          name: 'OPPO A78',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/pb5/25477542.jpeg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/oppo-a78-5g-8-gb-256-gb-chernyi-134893487/?c=750000000',
        },
        {
          name: 'OPPO A78',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/pb5/25477542.jpeg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/oppo-a78-5g-8-gb-256-gb-chernyi-134893487/?c=750000000',
        },
        {
          name: 'OPPO A78',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/pb5/25477542.jpeg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/oppo-a78-5g-8-gb-256-gb-chernyi-134893487/?c=750000000',
        },
        {
          name: 'OPPO A78',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/pb5/25477542.jpeg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/oppo-a78-5g-8-gb-256-gb-chernyi-134893487/?c=750000000',
        },
        {
          name: 'OPPO A78',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/pb5/25477542.jpeg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/oppo-a78-5g-8-gb-256-gb-chernyi-134893487/?c=750000000',
        },
        {
          name: 'OPPO A78',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/pb5/25477542.jpeg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/oppo-a78-5g-8-gb-256-gb-chernyi-134893487/?c=750000000',
        },
      ],
    },
    {
      name: 'Redmi',
      products: [
        {
          name: 'Redmi Note 14',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/p1c/20811850.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/redmi-note-14-8-gb-256-gb-chernyi-podarok-133591285/?c=750000000',
        },
        {
          name: 'Redmi Note 14',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/p1c/20811850.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/redmi-note-14-8-gb-256-gb-chernyi-podarok-133591285/?c=750000000',
        },
        {
          name: 'Redmi Note 14',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/p1c/20811850.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/redmi-note-14-8-gb-256-gb-chernyi-podarok-133591285/?c=750000000',
        },
        {
          name: 'Redmi Note 14',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/p1c/20811850.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/redmi-note-14-8-gb-256-gb-chernyi-podarok-133591285/?c=750000000',
        },
        {
          name: 'Redmi Note 14',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/p1c/20811850.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/redmi-note-14-8-gb-256-gb-chernyi-podarok-133591285/?c=750000000',
        },
        {
          name: 'Redmi Note 14',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/p1c/20811850.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/redmi-note-14-8-gb-256-gb-chernyi-podarok-133591285/?c=750000000',
        },
    
      ],
    },
    {
      name: 'Samsung',
      products: [
        {
          name: 'Samsung Galaxy A16',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p24/10324882.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-a16-8-gb-256-gb-chernyi-130609740/?c=750000000',
        },
        {
          name: 'Samsung Galaxy A16',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p24/10324882.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-a16-8-gb-256-gb-chernyi-130609740/?c=750000000',
        },
        {
          name: 'Samsung Galaxy A16',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p24/10324882.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-a16-8-gb-256-gb-chernyi-130609740/?c=750000000',
        },
        {
          name: 'Samsung Galaxy A16',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p24/10324882.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-a16-8-gb-256-gb-chernyi-130609740/?c=750000000',
        },
        {
          name: 'Samsung Galaxy A16',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p24/10324882.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-a16-8-gb-256-gb-chernyi-130609740/?c=750000000',
        },
        {
          name: 'Samsung Galaxy A16',
          description: '256GB, Black',
          rating: 4.8,
          likes: 0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p24/10324882.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-a16-8-gb-256-gb-chernyi-130609740/?c=750000000',
        },
      ],
    },
  ];

  selectedCategory: { name: string; products: Product[] } = this.categories[0];

  selectCategory(category: { name: string; products: Product[] }) {
    this.selectedCategory = category;
  }
  
  removeProduct(product: Product) {
    this.selectedCategory.products = this.selectedCategory.products.filter(p => p !== product);
  }
  
  likeProduct(product: Product) {
    product.likes++;
  }
  
}

