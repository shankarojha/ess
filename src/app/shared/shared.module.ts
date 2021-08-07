import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardsComponent } from '../cards/cards.component';
import { CounterAnimationDirective } from '../counter-animation.directive';


@NgModule({
  declarations: [NavbarComponent, CardsComponent, CounterAnimationDirective],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[NavbarComponent, CardsComponent, CounterAnimationDirective]
})
export class SharedModule { }
