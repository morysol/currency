import { Component, Input } from '@angular/core';
import { ICurrency } from 'src/app/models/currencies';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
})
export class ConvertorComponent {
  @Input() currencies: ICurrency;
  constructor() {}
}
