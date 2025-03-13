import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationToastService {
  constructor(private toastr: ToastrService) {}

  showError(error: any) {
    let detail = 'Đã xảy ra lỗi';

    if (error?.error?.detail) {
      detail = error.error.detail.toLowerCase();
    }

    if (error.status === 404 || error.status === 400) {
      this.toastr.error(detail, 'Thất bại');
    } else {
      console.error('An unexpected error occurred:', error);
      this.toastr.error('Lỗi hệ thống, vui lòng thử lại sau.', 'Lỗi');
    }
  }

  showSuccess(message: string, title: string = 'Thành công') {
    this.toastr.success(message, title);
  }

  showWarning(message: string, title: string = 'Cảnh báo') {
    this.toastr.warning(message, title);
  }

  showInfo(message: string, title: string = 'Thông tin') {
    this.toastr.info(message, title);
  }
}
