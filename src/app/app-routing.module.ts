import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';

import { EmpComponent } from './emp/emp.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',redirectTo: '/login',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'emp',component:EmpComponent},
  {path:'edit',component:EditComponent},
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
