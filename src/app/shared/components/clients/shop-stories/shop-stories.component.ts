import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderProductComponent } from '../slider-product/slider-product.component';

@Component({
  selector: 'app-shop-stories',
  imports: [CommonModule, SliderProductComponent],
  templateUrl: './shop-stories.component.html',
  styleUrl: './shop-stories.component.css',
})
export class ShopStoriesComponent {
  stories = [
    {
      image: 'assets/images/watch1.jpg',
      title:
        'Rado Brings Back Its 60s-Inspired Captain Cook Over-Pole In New 39mm Sizing',
      author: 'Erin Wilborn',
      authorAvatar: 'assets/images/avatar1.jpg',
      date: 'March 07, 2025',
    },
    {
      image: 'assets/images/watch2.jpg',
      title: "Editors' Picks: Our Favorite Omega Watches Of All Time",
      author: 'TB Team',
      authorAvatar: 'assets/images/avatar2.jpg',
      date: 'March 07, 2025',
    },
    {
      image: 'assets/images/watch3.jpg',
      title: "Hands On With Tissot's New PRC 100 Solar Watches",
      author: 'Erin Wilborn',
      authorAvatar: 'assets/images/avatar1.jpg',
      date: 'March 06, 2025',
    },
  ];
}
