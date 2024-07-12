import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';

const routes: Routes = [
  {path : 'calculatrice', component : CalculatriceComponent},
  {path : '', redirectTo : 'calculatrice', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
