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
  // data: Array<{}> = [...currencies];

  calcTotal() {
    const total = (this.currencyFrom / this.currencyTo) * this.currency1amount;
    console.log(total);
  }

  selectHandler(event: any) {
    this.title = event.target.value;
    const { name, value } = event.target;
    // console.log(this.data);
    // console.log(event.target.name);
    // console.log('-----      ', name, value);
    // console.log('', this.currencyFrom);
    const result = this.data.find((item) => item.ccy === value)?.buy;

    console.log(typeof result);
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
    // console.log(event.target.value);
  }
}
