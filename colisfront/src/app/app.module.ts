

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { TeamComponent } from './team/team.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonnesServices } from '../services/PersonnesServices';
import {HttpModule} from '@angular/http';
import {Route, RouterModule, Routes} from '@angular/router';
import { SingUpComponent } from './sing-up/sing-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule} from '@angular/forms';
import {TransporteurServices} from '../services/TransporteurServices';
import {DonneursServices} from '../services/DonneursServices';
import {ReceptionneurServices} from '../services/ReceptionneurServices';
import {LoginService} from '../services/LoginService';
import {AuthguardGuard} from './authguard.guard';
import {CookieService} from 'ngx-cookie-service';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { GeneralDashboardComponent } from './general-dashboard/general-dashboard.component';
import { TrajetPublierComponent } from './trajet-publier/trajet-publier.component';
import { TrajetDemanderComponent } from './trajet-demander/trajet-demander.component';
import { AvisComponent } from './avis/avis.component';
import { ProfilComponent } from './profil/profil.component';
import { ProposeTrajetComponent } from './propose-trajet/propose-trajet.component';
import {TrajetServices} from '../services/TrajetServices';
import {ProposerTrajetServices} from '../services/ProposerTrajetServices';
import { MessagerieMessageComponent } from './messagerie-message/messagerie-message.component';
import {MessagesServices} from '../services/MessagesServices';
import {ConversationServices} from '../services/ConversationServices';
import { DayAgoPipe } from './pipes/day-ago.pipe';
import {AgmCoreModule} from '@agm/core';
import { AvisRecuComponent } from './avis-recu/avis-recu.component';
import { TrajetDetailsComponent } from './trajet-details/trajet-details.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {ShareButtonsModule} from "ngx-sharebuttons";

//, canActivate: [AuthguardGuard]

const appRoutes: Routes = [
  {
    path: 'sign-in', component: LoginComponent
  },
  {
    path: 'sign-up', component: SingUpComponent
  },
  {
    path: 'home', component: HomePageComponent,
    children: [
      {path: 'detailsTrajet/:idTrajet', component: TrajetDetailsComponent}
    ],
  },
  {
    path: 'dashboard', canActivate: [AuthguardGuard] , children: [
    {
      path: 'general', component: DashboardComponent, children: [
      {
        path: 'general', component: GeneralDashboardComponent
      },
      {
        path: 'trajetProposer', component: TrajetPublierComponent
      },
      {
        path: 'proposeTrajet', component: ProposeTrajetComponent
      },
      {
        path: 'trajetDemander', component: TrajetDemanderComponent
      },
      {
        path: 'messagerie', component: MessagerieComponent,
        children: [
          {path: 'message/:idConversation', component: MessagerieMessageComponent}
        ],
      },
      {
        path: 'avis', component: AvisComponent
      },
      {
        path: 'avisRecu', component: AvisRecuComponent
      },
      {
        path: 'profil', component: ProfilComponent
      }
    ]
    }
  ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    PersonnesComponent,
    TeamComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    AdvertisementComponent,
    ContactUsComponent,
    DashboardComponent,
    SingUpComponent,
    HomePageComponent,
    MessagerieComponent,
    GeneralDashboardComponent,
    TrajetPublierComponent,
    TrajetDemanderComponent,
    AvisComponent,
    ProfilComponent,
    ProposeTrajetComponent,
    MessagerieMessageComponent,
    DayAgoPipe,
    AvisRecuComponent,
    TrajetDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ModalModule.forRoot(),
    ShareButtonsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtJW4fJmReCq-Ua-XsBJEJM1Ar_Cjni9w',
      libraries: ["places"]
    })
  ],
  providers: [PersonnesServices, TransporteurServices, DonneursServices,
    ReceptionneurServices, LoginService, AuthguardGuard, CookieService, TrajetServices, ProposerTrajetServices,
    MessagesServices, ConversationServices],
  bootstrap: [AppComponent]

})
export class AppModule { }

