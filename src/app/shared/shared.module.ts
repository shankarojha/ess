import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardsComponent } from '../cards/cards.component';


@NgModule({
  declarations: [NavbarComponent, CardsComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[NavbarComponent, CardsComponent]
})
export class SharedModule { }
