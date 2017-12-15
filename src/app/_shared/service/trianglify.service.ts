import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import Trianglify from 'trianglify';

@Injectable()
export class TrianglifyService {

  constructor(private domSanitizer: DomSanitizer) {
  }

  public generateTrianglifyBackgroundURL(width: number, height: number) {
    const random = Math.floor(Math.random() * 80) + 40;
    const option = {
      cell_size: random,
      variance: '1',
      x_colors: 'random',
      width: 0,
      height: 0
    };
    console.log('colorbrewer: ', Trianglify.colorbrewer);
    option.width = width;
    option.height = height;

    const pattern = Trianglify(option);
    const safeStype = this.domSanitizer.bypassSecurityTrustStyle(`url(${pattern.png()})`);
    return safeStype;
  }

}
