import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeviceCreationComponent } from './device-creation/device-creation.component';
import { DeviceOverviewComponent } from './device-overview/device-overview.component';
import { DeviceUpdateComponent } from './device-update/device-update.component';


const routes: Routes = [
  { path: '', redirectTo: '/deviceCreation', pathMatch: 'full' },
  { path: 'deviceCreation', component: DeviceCreationComponent },
  { path: 'device/:id', component: DeviceUpdateComponent },
  { path: 'devices', component: DeviceOverviewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
