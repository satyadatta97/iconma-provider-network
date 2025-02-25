import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // <-- Import this
import { UnprocessedDataRoutingModule } from './unprocessed-data-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    UnprocessedDataRoutingModule,
    HttpClientModule, // <-- Add it here
  ]
})
export class UnprocessedDataModule { }
