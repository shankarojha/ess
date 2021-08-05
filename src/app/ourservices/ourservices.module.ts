import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurservicesRoutingModule } from './ourservices-routing.module';
import { OurservicesComponent } from './ourservices.component';
import { IntegratedSecurityComponent } from './integrated-security/integrated-security.component';
import { FacilityManagementComponent } from './facility-management/facility-management.component';
import { SupplyChainComponent } from './supply-chain/supply-chain.component';
import { PayloadManagementComponent } from './payload-management/payload-management.component';
import { TrainingComponent } from './training/training.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [OurservicesComponent, IntegratedSecurityComponent, FacilityManagementComponent, SupplyChainComponent, PayloadManagementComponent, TrainingComponent],
  imports: [
    CommonModule,
    OurservicesRoutingModule,
    SharedModule
  ]
})
export class OurservicesModule { }
