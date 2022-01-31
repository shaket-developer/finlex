import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SuffixCurrencyPipe } from '../custom-pipes/suffix-currency.pipe';

@NgModule({
  declarations: [
    SuffixCurrencyPipe,
    CardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SuffixCurrencyPipe,
    CardComponent
  ]
})
export class SharedModule { }
