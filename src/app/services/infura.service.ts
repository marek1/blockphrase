import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfuraService {

  url = 'https://goerli.infura.io/v3/b84eac6f0aac437aba350d56af2bb066';

  constructor(private http: HttpClient) { }

  getTransaction(id: string|null) {
    return this.http.post(this.url, {
      'jsonrpc': '2.0',
      'method': 'eth_getTransactionByHash',
      'params': [id],
      'id': 1
    });
  }

}
