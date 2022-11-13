import { Component, OnInit } from '@angular/core';
import { ICurrency } from './models/currencies';
import { currencies as data } from './data/currencies';
import { CurrencyApi } from './api/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'currency';
  currencies: ICurrency[] = [];

  constructor(private allCurrency: CurrencyApi) {}

  ngOnInit(): void {
    this.allCurrency.getAll().subscribe((result) => {
      this.currencies = result.filter(
        ({ ccy }) => ccy === 'USD' || ccy === 'EUR'
      );
    });
  }
}
