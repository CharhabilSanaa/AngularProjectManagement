import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TachesComponent } from './taches/taches.component';
import { AuthComponent } from './auth/auth.component';
import { TasksViewComponent } from './tasks-view/tasks-view.component';
import {Routes, RouterModule} from '@angular/router';
import { MembersComponent } from './members/members.component';
import { FilesComponent } from './files/files.component';
import { ReunionsComponent } from './reunions/reunions.component';
import { MembersViewComponent } from './members-view/members-view.component';
import { ReunionsViewComponent } from './reunions-view/reunions-view.component';
import { FilesViewComponent } from './files-view/files-view.component';
import { ServicesComponent } from './services/services.component';
import { UsersComponent } from './users/users.component';
import { ProjetsComponent } from './projets/projets.component';
import { ProjetsViewComponent } from './projets-view/projets-view.component';
import { ParametresComponent } from './parametres/parametres.component';
import { ThemesComponent } from './themes/themes.component';
import { DecoComponent } from './deco/deco.component';
import { TaskService } from './services/task.service';
import { HomeService } from './services/home.service';
import { MemberService } from './services/member.service';
import { ProjectService } from './services/projets.service';
import { EventService } from './services/event.service';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { RecherchesComponent } from './recherches/recherches.component';
import { RappelComponent } from './rappel/rappel.component';
import { RappelViewComponent } from './rappel-view/rappel-view.component';
import { RecherchesViewComponent } from './recherches-view/recherches-view.component';



const appRoutes: Routes = [
  {path :'taches' ,component : TasksViewComponent},
  {path :'auth' ,component : AuthComponent},
  {path :'users' ,component : UsersComponent},
  {path :'membres' ,component : MembersViewComponent},
  {path :'reunions' ,component : ReunionsViewComponent},
  {path :'files' ,component : FilesViewComponent},
  {path: 'projets',component:ProjetsViewComponent},
  {path: 'parametres',component:ParametresComponent},
  {path: 'themes',component:ThemesComponent},
  {path: 'editprofil',component:EditprofilComponent},
  {path: 'recherches',component:RecherchesComponent},
  {path :'revision' ,component : RappelComponent},
  {path: '',component: AuthComponent}



];

@NgModule({
  declarations: [
    AppComponent,
    TachesComponent,
    AuthComponent,
    TasksViewComponent,
    MembersComponent,
    FilesComponent,
    ReunionsComponent,
    MembersViewComponent,
    ReunionsViewComponent,
    FilesViewComponent,
    ServicesComponent,
    UsersComponent,
    ProjetsComponent,
    ProjetsViewComponent,
    ParametresComponent,
    ThemesComponent,
    DecoComponent,
    EditprofilComponent,
    RecherchesComponent,
    RappelComponent,
    RappelViewComponent,
    RecherchesViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [
    AuthComponent,
    TaskService,
    MemberService,
    ProjectService,
    EventService,
    HomeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
