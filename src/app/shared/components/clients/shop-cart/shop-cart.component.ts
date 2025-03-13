import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  imports: [CommonModule],
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.css',
})
export class ShopCartComponent {
  watchCards = [
    {
      image: 'https://i.ebayimg.com/images/g/ul4AAOSw~RZlwiok/s-l1600.webp',
      subtitle: 'SEAMLESS ELEGANCE & UNMATCHED COMFORT',
      title: '24S/S Tennis Badminton Bag',
    },
    {
      image:
        'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ls9f9wp1e75w66',
      subtitle: 'VERSATILE SIZING FOR ANY OCCASION',
      title: 'Li-Ning Thunder Axforce 90 Tiger MAX',
    },
    {
      image: 'https://i.ebayimg.com/images/g/uDAAAOSw-61nCO4C/s-l1600.webp',
      subtitle: 'A LEGEND IN SPACE EXPLORATION',
      title: '24F/W Power Cushion Eclipsion Z3',
    },
  ];
}
