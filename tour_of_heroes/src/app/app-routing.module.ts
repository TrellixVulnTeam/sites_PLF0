import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MessagesComponent} from "./messages/messages.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guard/auth.guard";


const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard',
  canActivate: [AuthGuard],
  canDeactivate: [AuthGuard],
    component: DashboardComponent},
  {path: 'message', component: MessagesComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {
}
