import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'hotels'): any {
    let url = `${environment.baseUrl}/imagen/${tipo}/${img}`;

    return url;
  }

}
