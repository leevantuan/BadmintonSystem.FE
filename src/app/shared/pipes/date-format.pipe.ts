import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(timeString: string): string {
    if (!timeString) return '';

    // Cắt chuỗi "HH:mm:ss" thành "HH:mm"
    return timeString.substring(0, 5);

    // return timeString.split(':').slice(0, 2).join(':');
  }
}
