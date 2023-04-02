import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';

import {HttpClient, HttpClientModule , HTTP_INTERCEPTORS}  from '@angular/common/http';
import { AppointmentService } from './services/appointment.service';
import { HomeComponent } from './components/home/home.component';





import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DoctorComponent } from './components/doctor/doctor.component';
import { SecretaireComponent } from './components/secretaire/secretaire.component';


import { TherapieComponent } from './components/therapie/therapie.component';
import { TherapieListComponent } from './components/therapie-list/therapie-list.component';
import { AjoutTherapieComponent } from './components/ajout-therapie/ajout-therapie.component';
import { ProfileDoctorComponent } from './components/profile-doctor/profile-doctor.component';
import { ProfileSecretaireComponent } from './components/profile-secretaire/profile-secretaire.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { NavPComponent } from './components/nav-p/nav-p.component';
import { NavMComponent } from './components/nav-m/nav-m.component';
import { NavMPComponent } from './components/nav-mp/nav-mp.component';
import { NavSComponent } from './components/nav-s/nav-s.component';
import { PatientComponent } from './components/patient/patient.component';
import { TherapieService } from './services/therapie.service';
import { StaticsComponent } from './components/statics/statics.component';
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
  {path:'patient',component:PatientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    HomeComponent,
    DoctorComponent,
    SecretaireComponent,
    TherapieComponent,
    TherapieListComponent,
    AjoutTherapieComponent,
    ProfileDoctorComponent,
    ProfileSecretaireComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    NavPComponent,
    NavMComponent,
    NavMPComponent,
    NavSComponent,
    PatientComponent,
    StaticsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  
    ReactiveFormsModule
  ],

  providers: [ TherapieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
