import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //RouterModule,

    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,

    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    //RouterModule,

    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class LayoutModule {}
