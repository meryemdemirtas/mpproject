import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HomeComponent } from './layout/home/home.component';
import { EmployeesComponent } from './layout/employees/employees.component';


const routes: Routes = [
  {path:'', component:HomeComponent, children:[
    {path:'dahboard', component:DashboardComponent},
    {path:'employees', component:EmployeesComponent},
    {path:'', redirectTo:'admin/home', pathMatch:'full'}
  ]}
  
   

  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
