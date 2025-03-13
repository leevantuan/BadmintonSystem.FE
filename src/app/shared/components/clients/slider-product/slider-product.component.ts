import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-product',
  imports: [CommonModule],
  templateUrl: './slider-product.component.html',
  styleUrl: './slider-product.component.css',
})
export class SliderProductComponent {
  stories = [
    {
      image:
        'https://i.ebayimg.com/thumbs/images/g/~bcAAOSwLPtmuwQP/s-l500.jpg',
      title: 'Exploring the Mountains',
      author: 'John Doe',
      authorAvatar:
        'https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg',
      date: 'March 5, 2025',
    },
    {
      image:
        'https://i.ebayimg.com/thumbs/images/g/hC8AAOSwRj1nCPDW/s-l500.jpg',
      title: 'A Day at the Beach',
      author: 'Emily Brown',
      authorAvatar:
        'https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg',
      date: 'March 7, 2025',
    },
    {
      image:
        'https://i.ebayimg.com/thumbs/images/g/T5wAAOSwWZNnCPAK/s-l500.jpg',
      title: 'A Day at the Beach',
      author: 'Emily Brown',
      authorAvatar:
        'https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg',
      date: 'March 7, 2025',
    },
    {
      image:
        'https://i.ebayimg.com/thumbs/images/g/bc4AAOSwvnRkGXgc/s-l500.jpg',
      title: 'City Lights and Adventures',
      author: 'Jane Smith',
      authorAvatar:
        'https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg',
      date: 'March 6, 2025',
    },
    {
      image:
        'https://i.ebayimg.com/thumbs/images/g/cykAAOSwKNRmDrqn/s-l500.jpg',
      title: 'A Day at the Beach',
      author: 'Emily Brown',
      authorAvatar:
        'https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg',
      date: 'March 7, 2025',
    },
  ];

  currentIndex = 0;
  translateX = 0;
  slideWidth = 426 + 32;
  visibleItems = 3;

  constructor() {}

  ngOnInit(): void {}

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.translateX += this.slideWidth;
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.stories.length - this.visibleItems) {
      this.currentIndex++;
      this.translateX -= this.slideWidth;
    } else {
      // Reset về đầu slider nếu đã đến cuối
      this.currentIndex = 0;
      this.translateX = 0;
    }
  }

  isPrevDisabled(): boolean {
    return this.currentIndex === 0;
  }

  // Helper method to determine if next button should be disabled
  isNextDisabled(): boolean {
    return (
      this.currentIndex >= this.stories.length - this.visibleItems &&
      this.currentIndex !== 0
    );
  }
}
