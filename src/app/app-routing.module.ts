import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'productos', component: TablaComponent},
  {path:'productos/:id/edit', component: EditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
