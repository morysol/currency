import { Component, Input } from '@angular/core';
import { ICurrency } from 'src/app/models/currencies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() currencies: ICurrency;
}
