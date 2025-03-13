import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  slides = [
    {
      title: 'VICTOR TK-RYUGA II PRO',
      description:
        'Cây vợt đẳng cấp cho người chơi chuyên nghiệp, giúp bạn kiểm soát trận đấu với sức mạnh tối đa.',
      img: 'https://www.victorsport.com/files/idc/upload/images/TK-RYUGA%20II%20PRO_BANNER%20News%20Article%20EN_1000x521.jpg',
    },
    {
      title: 'Cầu lông chuyên nghiệp',
      description:
        'Địa điểm lý tưởng để luyện tập và thi đấu, với trang thiết bị hiện đại và không gian rộng rãi.',
      img: 'https://cdn.luongsport.com/wp-content/uploads/2020/05/81852043_2692783034143522_2364624734785634304_n.jpg',
    },
  ];

  // ngOnInit(): void {
  //   this.startAutoSlide();
  // }

  // startAutoSlide(): void {
  //   setInterval(() => {
  //     this.nextSlide();
  //   }, 10000);
  // }
  currentIndex = 0;
  phoneInfo = '0123-456-789';
  addressInfo = '123 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM';

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
