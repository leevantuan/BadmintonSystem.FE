import { Component } from '@angular/core';
import { SliderComponent } from '../../../shared/components/clients/slider/slider.component';
import { CommonModule } from '@angular/common';
import { ShopCartComponent } from '../../../shared/components/clients/shop-cart/shop-cart.component';
import { ShopFeaturedComponent } from '../../../shared/components/clients/shop-featured/shop-featured.component';
import { ShopStoriesComponent } from '../../../shared/components/clients/shop-stories/shop-stories.component';
import { FooterComponent } from '../../../shared/components/clients/footer/footer.component';

@Component({
  selector: 'app-shop',
  imports: [
    SliderComponent,
    ShopCartComponent,
    ShopFeaturedComponent,
    CommonModule,
    ShopStoriesComponent,
    FooterComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  // clubs = Clubs;
  // items = Items;
}
