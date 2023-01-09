import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'proyectos', component: ProyectosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
