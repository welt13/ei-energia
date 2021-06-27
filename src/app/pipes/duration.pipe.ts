import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number, format?: string): string {
    let duration: string = '';
    switch (format) {
      case 'h m':
        let singNegative = value < 0;
        value = singNegative ? value * -1 : value;
        let number: number = value / 60;
        let hours: number = Math.floor(number);
        let minutes: number = Math.floor(
          Number((number - hours).toFixed(2)) * 60
        );
        if (hours === 0 && minutes === 0) {
          duration = '0min';
        } else {
          duration = `${singNegative ? '-' : ''}${
            hours !== 0 ? `${hours}h` : ''
          } ${minutes !== 0 ? `${minutes}min` : ''}`;
        }
        break;
      case 'h':
        duration = `${value / 60}h`;
        break;
      case 's':
        duration = `${value * 60}s`;
        break;
      default:
        duration = `${value}min`;
        break;
    }
    return duration;
  }
}
