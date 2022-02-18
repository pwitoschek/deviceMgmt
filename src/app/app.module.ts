import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceOverviewComponent } from './device-overview/device-overview.component';
import { DeviceCreationComponent } from './device-creation/device-creation.component';
import { FormsModule } from '@angular/forms';
import { DeviceUpdateComponent } from './device-update/device-update.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DeviceOverviewComponent,
    DeviceCreationComponent,
    DeviceUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
