import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { EmailComponent } from './email/email.component';
import { AccountComponent } from './account/account.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
  }
]


@NgModule({
  declarations: [DashboardComponent, SidebarComponent, HeaderComponent, MainComponent, EmailComponent, AccountComponent, GameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
