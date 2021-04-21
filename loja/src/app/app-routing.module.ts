import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListComponent } from './list/list.component';
import { SaidaComponent } from './saida/saida.component';

const routes: Routes = [
  {path:"", component:ListComponent},
  {path:"saida", component:SaidaComponent},
  {path:"cadastro", component:CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
