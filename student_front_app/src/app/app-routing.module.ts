import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './students/add/add.component';
import { DisplayComponent } from './students/display/display.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { AuthGuard } from './services/security/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'students',
    children: [
      {
        path: 'add',
        component: AddComponent,
        canActivate: [AuthGuard]
      },
      {
          path: 'display',
          component: DisplayComponent
      }
  ]
},
{ path: 'log-in', component: SigninComponent },
{ path: 'sign-up', component: SignupComponent },
{ path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
