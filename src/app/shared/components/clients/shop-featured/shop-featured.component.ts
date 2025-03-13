import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-featured',
  imports: [CommonModule],
  templateUrl: './shop-featured.component.html',
  styleUrl: './shop-featured.component.css',
})
export class ShopFeaturedComponent {
  watches = [
    {
      brand: 'MARATHON',
      name: 'Lining Axforce 90 Xanh Dragon Max',
      price: 2300,
      image:
        'https://cdn.shopvnb.com/uploads/images/bai_viet/vot-cau-long-lining-axforce-90-xanh-dragon-max-2-1727136517.png',
    },
    {
      brand: 'MARATHON',
      name: 'LI-NING AXFORCE 90 TIGER MAX',
      price: 2700,
      image: 'https://i.ebayimg.com/images/g/7vIAAOSw0~Jkgt5v/s-l1200.jpg',
    },
    {
      brand: 'LOUIS ERARD',
      name: 'Victor Thruster Ryuga II Pro',
      price: 2900,
      image:
        'https://cdn.hvshop.vn/wp-content/uploads/2022/09/Vot-cau-long-victor-thruster-ryuga-ii-3.jpg',
    },
    {
      brand: 'LOUIS ERARD',
      name: 'Victor Thruster TK RYUGA METALLIC',
      price: 2900,
      image:
        'https://img.lazcdn.com/g/ff/kf/S3ebfc6dd4ce24ba08f3fcb47fed16ee4M.jpg_720x720q80.jpg',
    },
    {
      brand: 'MARATHON',
      name: 'Lining Axforce 90 Xanh Dragon Max',
      price: 2300,
      image:
        'https://cdn.shopvnb.com/uploads/images/bai_viet/vot-cau-long-lining-axforce-90-xanh-dragon-max-2-1727136517.png',
    },
    {
      brand: 'MARATHON',
      name: 'LI-NING AXFORCE 90 TIGER MAX',
      price: 2700,
      image: 'https://i.ebayimg.com/images/g/7vIAAOSw0~Jkgt5v/s-l1200.jpg',
    },
    {
      brand: 'LOUIS ERARD',
      name: 'Victor Thruster Ryuga II Pro',
      price: 2900,
      image:
        'https://cdn.hvshop.vn/wp-content/uploads/2022/09/Vot-cau-long-victor-thruster-ryuga-ii-3.jpg',
    },
    {
      brand: 'LOUIS ERARD',
      name: 'Victor Thruster TK RYUGA METALLIC',
      price: 2900,
      image:
        'https://img.lazcdn.com/g/ff/kf/S3ebfc6dd4ce24ba08f3fcb47fed16ee4M.jpg_720x720q80.jpg',
    },
  ];
}
