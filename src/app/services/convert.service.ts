import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor() { }

  toAscii(hex: string) {
    let str = '';
    for (let n = 0; n < hex.length; n += 2) {
      let asciiNum = parseInt(hex.substr(n, 2), 16);
      let char = '';
      switch(asciiNum) {
        case (32):
          char = '&nbsp;';
          break;
        case (10):
          char = "<br/>";
          break;
        default:
          char = String.fromCharCode(asciiNum);
      }
      str += char;
    }
    return str;
  }

}
