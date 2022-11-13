import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurrency } from '../models/currencies';

@Injectable({
  providedIn: 'root',
})
export class CurrencyApi {
  constructor(private http: HttpClient) {}
  getAll(): Observable<ICurrency[]> {
    return this.http.get<ICurrency[]>(
      'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
    );
  }
}
