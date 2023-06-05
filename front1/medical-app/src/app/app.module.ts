import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';

import {HttpClient, HttpClientModule , HTTP_INTERCEPTORS}  from '@angular/common/http';
import { AppointmentService } from './services/appointment.service';
import { HomeComponent } from './components/home/home.component';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatNativeDateModule} from '@angular/material/core';

import { MatSliderModule } from '@angular/material/slider';

import { MatInputModule } from '@angular/material/input';
import { EmailComponent } from './components/email/email.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { MyRdvComponent } from './components/my-rdv/my-rdv.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifRdvComponent } from './components/modif-rdv/modif-rdv.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { SecretaireComponent } from './components/secretaire/secretaire.component';
import { CommentComponent } from './components/comment/comment.component';
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
import { TherapieListModifComponent } from './components/therapie-list-modif/therapie-list-modif.component';
import { StaticsComponent } from './components/statics/statics.component';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptor } from './services/auth.interceptor';
import { UserServiceService } from './services/user-service.service';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { MedPComponent } from './components/med-p/med-p.component';
import { MedSComponent } from './components/med-s/med-s.component';
import { SecComponent } from './components/sec/sec.component';
import { AjoutMedComponent } from './components/ajout-med/ajout-med.component';
import { AjoutSecComponent } from './components/ajout-sec/ajout-sec.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ModifSecComponent } from './components/modif-sec/modif-sec.component';
import { ModifMedsComponent } from './components/modif-meds/modif-meds.component';
import { ModifTherapieComponent } from './components/modif-therapie/modif-therapie.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIcon, MatIconModule } from '@angular/material/icon';
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
    AjoutMedComponent,
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
    StaticsComponent,
    ForbiddenComponent,
    MedPComponent,
    MedSComponent,
    SecComponent,
    AjoutSecComponent,
    ProfileComponent,
    ModifSecComponent,
    ModifMedsComponent,
    ModifTherapieComponent,
    AppointmentComponent,
    TherapieListModifComponent,
    FooterComponent,
    CommentComponent,
    ModifRdvComponent,
   EmailComponent,
    MyRdvComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot({
      timeOut:20000,
      positionClass:"toast-bottom-right"
}),
    NgbModule,
    AngularMaterialModule,
    ReactiveFormsModule,
          BrowserAnimationsModule
  ],

  providers: [ 
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
