import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './components/balance/balance.component';
import { CaresFormComponent } from './components/cares-form/cares-form.component';
import { CaresComponent } from './components/cares/cares.component';

const routes: Routes = [
  { path: 'home', component: CaresComponent },
  { path: 'cares-form', component: CaresFormComponent },
  { path: 'balance', component: BalanceComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
