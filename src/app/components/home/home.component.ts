import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../../services/convert.service';
import { hex } from '../../data/hex';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public convertService: ConvertService) { }

  ngOnInit(): void {
  }

  renderExample(index: number) {
    return this.convertService.toAscii(hex[index]);
  }

}
