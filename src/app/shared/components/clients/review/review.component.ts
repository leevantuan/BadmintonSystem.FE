import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review',
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
})
export class ReviewComponent {
  rating: number = 4.6;
  reviewsCount: number = 645;
  stars: number[] = Array(5).fill(0);

  ratingInput = 3;
  title = '';
  description = '';
  recommend = false;
  agree = false;

  setRating(value: number) {
    this.rating = value;
  }

  submitReview() {
    if (!this.agree) {
      alert('You must agree to the terms and conditions.');
      return;
    }
    console.log({
      rating: this.rating,
      title: this.title,
      description: this.description,
      recommend: this.recommend,
    });
  }

  resetForm() {
    this.rating = 3;
    this.title = '';
    this.description = '';
    this.recommend = false;
    this.agree = false;
  }

  averageRating: number = 4.65;
  ratings = [
    { stars: 5, percentage: 20, count: 239 },
    { stars: 4, percentage: 60, count: 432 },
    { stars: 3, percentage: 15, count: 53 },
    { stars: 2, percentage: 5, count: 32 },
    { stars: 1, percentage: 0, count: 13 },
  ];

  reviews = [
    {
      username: 'Nguyen Van A',
      avatar: 'https://i.pravatar.cc/50?img=1',
      rating: 5,
      comment: 'Sản phẩm rất tốt!',
      date: '2024-03-15',
    },
    {
      username: 'Tran Thi B',
      avatar: 'https://i.pravatar.cc/50?img=2',
      rating: 4,
      comment: 'Khá hài lòng với chất lượng.',
      date: '2024-03-14',
    },
    {
      username: 'Le Van C',
      avatar: 'https://i.pravatar.cc/50?img=3',
      rating: 3,
      comment: 'Tạm ổn, giao hàng hơi chậm.',
      date: '2024-03-13',
    },
    {
      username: 'Pham Thi D',
      avatar: 'https://i.pravatar.cc/50?img=4',
      rating: 5,
      comment: 'Quá tuyệt vời!',
      date: '2024-03-12',
    },
    {
      username: 'Hoang Van E',
      avatar: 'https://i.pravatar.cc/50?img=5',
      rating: 2,
      comment: 'Không hài lòng lắm.',
      date: '2024-03-11',
    },
    {
      username: 'Do Thi F',
      avatar: 'https://i.pravatar.cc/50?img=6',
      rating: 4,
      comment: 'Dùng khá ổn.',
      date: '2024-03-10',
    },
    {
      username: 'Bui Van G',
      avatar: 'https://i.pravatar.cc/50?img=7',
      rating: 3,
      comment: 'Sản phẩm trung bình.',
      date: '2024-03-09',
    },
    {
      username: 'Pham Thi H',
      avatar: 'https://i.pravatar.cc/50?img=8',
      rating: 5,
      comment: 'Chất lượng tốt!',
      date: '2024-03-08',
    },
    {
      username: 'Nguyen Van I',
      avatar: 'https://i.pravatar.cc/50?img=9',
      rating: 4,
      comment: 'Giao hàng nhanh.',
      date: '2024-03-07',
    },
    {
      username: 'Le Thi K',
      avatar: 'https://i.pravatar.cc/50?img=10',
      rating: 1,
      comment: 'Không như mong đợi.',
      date: '2024-03-06',
    },
  ];
}
