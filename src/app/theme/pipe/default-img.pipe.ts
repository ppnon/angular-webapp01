import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImg'
})
export class DefaultImgPipe implements PipeTransform {

  imagendefault = 'http://www.rose-medipack.com/wp-content/themes/hoxa/images/default.png';
  //value: img url
  transform(value: any, args?: any): any {
    return value? value : this.imagendefault;
  }

}
