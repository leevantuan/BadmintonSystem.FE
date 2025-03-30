import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tenant',
  imports: [CommonModule],
  templateUrl: './tenant.component.html',
  styleUrl: './tenant.component.css',
})
export class TenantComponent {
  tours = [
    {
      image:
        'https://thethao365.com.vn/Data/upload/images/Product/Caulong/ki-thuat-co-ban-cau-long.jpg',
      duration: '4 hours',
      title: 'Đại Lý - Lệ Giang - Shangrila',
      location: 'Trung Quốc',
      rating: 5,
      price: 1500000,
    },
    {
      image:
        'https://cdn.hvshop.vn/wp-content/uploads/2023/09/Ky-thuat-danh-cau-long-don-khi-phong-thu-2.webp',
      duration: '3 ngày',
      title: 'Tour Nhật Bản Hoa Chi Anh',
      location: 'Nhật Bản',
      rating: 5,
      price: 2330000,
    },
    {
      image:
        'https://fado.vn/blog/wp-content/uploads/2024/03/chup-anh-voi-vot-cau-long-jpg.webp',
      duration: '3 ngày',
      title: 'Khám phá thành phố xa hoa',
      location: 'Dubai',
      rating: 5,
      price: 2220000,
    },
    {
      image:
        'https://cdn.hvshop.vn/wp-content/uploads/2023/09/Ky-thuat-danh-cau-long-don-khi-phong-thu-2.webp',
      duration: '5 ngày',
      title: 'Bangkok - Pattaya - Ayutthaya',
      location: 'Thái Lan',
      rating: 5,
      price: 2800000,
    },
    {
      image:
        'https://thethao365.com.vn/Data/upload/images/Product/Caulong/ki-thuat-co-ban-cau-long.jpg',
      duration: '4 hours',
      title: 'Đại Lý - Lệ Giang - Shangrila',
      location: 'Trung Quốc',
      rating: 5,
      price: 1500000,
    },
    {
      image:
        'https://fado.vn/blog/wp-content/uploads/2024/03/chup-anh-voi-vot-cau-long-jpg.webp',
      duration: '3 ngày',
      title: 'Tour Nhật Bản Hoa Chi Anh',
      location: 'Nhật Bản',
      rating: 5,
      price: 2330000,
    },
    {
      image:
        'https://fado.vn/blog/wp-content/uploads/2024/03/chup-anh-voi-vot-cau-long-jpg.webp',
      duration: '3 ngày',
      title: 'Tour Khám phá thành phố xa hoa',
      location: 'Dubai',
      rating: 5,
      price: 2220000,
    },
    {
      image:
        'https://fado.vn/blog/wp-content/uploads/2024/03/chup-anh-voi-vot-cau-long-jpg.webp',
      duration: '5 ngày',
      title: 'Bangkok - Pattaya - Ayutthaya',
      location: 'Thái Lan',
      rating: 5,
      price: 2800000,
    },
  ];
}
