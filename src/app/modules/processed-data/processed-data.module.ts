import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessedDataRoutingModule } from './processed-data-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ProcessedDataRoutingModule
  ]
})
export class ProcessedDataModule { }
