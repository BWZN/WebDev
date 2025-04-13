import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})
export class ProductsComponent {
  products = [
    {
      name: 'Apple iPhone 13',
      description: '128GB, Black',
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },

    {
      name: 'Apple iPhone 16 Pro Max',
      description: '256Gb, Gold',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },

    {
      name: 'Apple iPhone 13',
      description: '128GB, Black',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },

    {
      name: 'Apple iPhone 13',
      description: '128GB, Black',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },

    {
      name: 'Apple iPhone 13',
      description: '128GB, Black',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },

    {
      name: 'Apple iPhone 13',
      description: '128GB, Black',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },

    {
      name: 'Apple iPhone 13',
      description: '128GB, Black',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },

    {
      name: 'Apple iPhone 13',
      description: '128GB, Black',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },

    {
      name: 'Apple iPhone 13',
      description: '128GB, Black',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },

    {
      name: 'Apple iPhone 13',
      description: '128GB, Black',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
  ];

  share(link: string, platform: string) {
    let url = '';
    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      url = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(url, '_blank');
  }
}
