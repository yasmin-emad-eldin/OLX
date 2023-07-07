import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authAdminGuard } from 'src/app/Guards/Dashboard/auth-admin.guard';

const routes: Routes =[
  {path:"",component:MainlayoutComponent,
  children:[
    {path:"",component:HomeComponent,canActivate:[authAdminGuard]},
    {path:'Login', component:LoginComponent},
     {path:'Logout', component:LoginComponent},
 //////// must be last  Path/////////////
 {path: '**', component:NotFoundComponent}
/////////////////////////////////////////
  ]}
]

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    MainlayoutComponent,
    LoginComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
