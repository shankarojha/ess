import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacilityManagementComponent } from './facility-management/facility-management.component';
import { IntegratedSecurityComponent } from './integrated-security/integrated-security.component';
import { OurservicesComponent } from './ourservices.component';
import { PayloadManagementComponent } from './payload-management/payload-management.component';
import { SupplyChainComponent } from './supply-chain/supply-chain.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  { path: '', component: OurservicesComponent },
  { path: 'integratedsecurity', component: IntegratedSecurityComponent },
  { path: 'facilitymanagement', component: FacilityManagementComponent },
  { path: 'supplychain', component: SupplyChainComponent },
  { path: 'payloadmanagement', component: PayloadManagementComponent },
  { path: 'training', component: TrainingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurservicesRoutingModule { }
