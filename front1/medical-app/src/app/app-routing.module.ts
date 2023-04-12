import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppointmentListComponent } from "./components/appointment-list/appointment-list.component";
import { DoctorComponent } from "./components/doctor/doctor.component";
import { ForbiddenComponent } from "./components/forbidden/forbidden.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { MedPComponent } from "./components/med-p/med-p.component";
import { MedSComponent } from "./components/med-s/med-s.component";
import { PatientComponent } from "./components/patient/patient.component";
import { RegisterComponent } from "./components/register/register.component";
import { SecComponent } from "./components/sec/sec.component";
import { TherapieListComponent } from "./components/therapie-list/therapie-list.component";
import { TherapieComponent } from "./components/therapie/therapie.component";
import { AuthGuard } from "./services/auth.guard";
import { MedAuthGuard } from "./services/med-auth.guard";
import { MedSAuthGuard } from "./services/med-sauth.guard";
import { SecAuthGuard } from "./services/sec-auth.guard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inscrire',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {path: 'therapies/:id', component:TherapieComponent},
  {path: 'therapies',component:TherapieListComponent},
  {path:'patient',component:PatientComponent, canActivate:[AuthGuard]/*, data:{role:'PATIENT'}*/},
  {path:'doctor',component:MedPComponent,canActivate:[MedAuthGuard]/*, data:{role:['ADMIN']}*/},
  {path:'doctorsec',component:MedSComponent, 
       children:[
        {path: 'appointments',component:AppointmentListComponent,canActivate:[MedSAuthGuard]},
        {path: 'doctors',component:DoctorComponent,canActivate:[MedSAuthGuard]}
       ]},
  {path:'secretaire',component:SecComponent,canActivate:[SecAuthGuard]},
  {path:'forbidden',component:ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }