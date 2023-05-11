import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericComponent } from './generic/generic.component';


const routes: Routes = [
  //vanno messi i vari path
  { path: 'generic/:id', component: GenericComponent },
  
  {path: '', redirectTo: '/generic/btc', pathMatch: 'full'},
  //va messo il path generic che contiene le altre 5 pagine
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }