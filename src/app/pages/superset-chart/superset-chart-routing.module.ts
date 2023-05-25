import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupersetChartComponent } from './superset-chart.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SupersetChartComponent }
])],
  exports: [RouterModule]
})
export class SupersetChartRoutingModule { }
