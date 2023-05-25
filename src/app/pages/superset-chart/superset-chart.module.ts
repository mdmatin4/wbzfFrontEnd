import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupersetChartRoutingModule } from './superset-chart-routing.module';
import { SupersetChartComponent } from './superset-chart.component';
import { SupersetAuthServicesService } from 'src/app/services/superset-auth-services.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SupersetChartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SupersetChartRoutingModule
  ],
  providers: [SupersetAuthServicesService]
})
export class SupersetChartModule { }
