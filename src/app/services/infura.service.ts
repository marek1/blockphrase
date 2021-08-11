import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mainNetUrl } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class InfuraService {

  constructor(private http: HttpClient) { }

  getTransaction(id: string|null) {
    return this.http.post(mainNetUrl, {
      'jsonrpc': '2.0',
      'method': 'eth_getTransactionByHash',
      'params': [id],
      'id': 1
    });
  }

}
