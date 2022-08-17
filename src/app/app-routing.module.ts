import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EdithardsoftComponent } from './components/hardsoft/edithardsoft.component';
import { NewhardsoftComponent } from './components/hardsoft/newhardsoft.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/proyecto/editproyecto.component';
import { NewproyectoComponent } from './components/proyecto/newproyecto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditeducacionComponent },
  { path: 'nuevopro', component: NewproyectoComponent },
  { path: 'editpro/:id', component: EditproyectoComponent },
  { path: 'nuevohys', component: NewhardsoftComponent },
  { path: 'edithys/:id', component: EdithardsoftComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
