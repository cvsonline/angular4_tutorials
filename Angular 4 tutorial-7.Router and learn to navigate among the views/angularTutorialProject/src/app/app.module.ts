import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {UserComponent} from './users.component';
import {UserDetailComponent} from './user-detail.component';
import {UserService} from './user.service';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent }  from './app.component';
import {DashboardComponent} from "./dashboard.component";

const routes:Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},//"full" => only when the entire URL matches ''
];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "users",
        component: UserComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    UserDetailComponent
  ],
  providers:[
    UserService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
