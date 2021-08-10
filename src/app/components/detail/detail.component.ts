import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { InfuraService } from '../../services/infura.service';
import { utf8Encode } from '@angular/compiler/src/util';
import { ConvertService } from '../../services/convert.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public id: string|null;
  private sub: Subscription;
  data$: Observable<any> = new Observable<any>();

  constructor(private route: ActivatedRoute,
              private infuraService: InfuraService,
              public convertService: ConvertService) {
    this.id = null;
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.data$ = this.infuraService.getTransaction(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
