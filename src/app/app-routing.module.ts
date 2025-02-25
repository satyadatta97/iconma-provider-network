import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/unprocessed-data/unprocessed-data.module').then((m) => m.UnprocessedDataModule),
  },
  {
    path: 'processed-data',
    loadChildren: () =>
      import('./modules/processed-data/processed-data.module').then((m) => m.ProcessedDataModule),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('./modules/results/results.module').then((m) => m.ResultsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
