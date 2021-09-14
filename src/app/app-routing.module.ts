import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionListComponent } from './components/subscriptionOptions/optionList.component';
const routes: Routes = [
  { path: 'option-list-1', component: OptionListComponent },
  { path: 'option-list-2', component: OptionListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'option-list-1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
