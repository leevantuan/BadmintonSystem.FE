import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number | string): string {
    if (!value) return '0';
    return Number(value).toLocaleString('de-DE');
  }
}
