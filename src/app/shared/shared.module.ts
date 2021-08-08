import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardsComponent } from '../cards/cards.component';
import { CounterAnimationDirective } from '../counter-animation.directive';
import { RemovespacePipe } from '../removespace.pipe';


@NgModule({
  declarations: [NavbarComponent, CardsComponent, CounterAnimationDirective, RemovespacePipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[NavbarComponent, CardsComponent, CounterAnimationDirective, RemovespacePipe]
})
export class SharedModule { }
