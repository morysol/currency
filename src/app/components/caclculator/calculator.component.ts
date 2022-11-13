import { Component } from '@angular/core';
import { currencies } from 'src/app/data/currencies';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent {
  title: string = '';
  currency1amount: number = 0;
  coefficient: number = 1;
  currencyFrom: number = 1;
  currencyTo: number = 1;
  data = [
    ...currencies.map(({ ccy, buy }) => ({ ccy, buy })),
    { ccy: 'UAH', buy: '1' },
  ];

  calcTotal() {
    const total = (this.currencyFrom / this.currencyTo) * this.currency1amount;
  }

  selectHandler(event: any) {
    this.title = event.target.value;
    const { name, value } = event.target;

    const result = this.data.find((item) => item.ccy === value)?.buy;

    switch (name) {
      case 'currencyFrom':
        if (result) {
          this.currencyFrom = parseFloat(result);
        }
        break;

      case 'currencyTo':
        if (result) {
          this.currencyTo = parseFloat(result);
        }
        break;

      default:
        break;
    }
  }
}
