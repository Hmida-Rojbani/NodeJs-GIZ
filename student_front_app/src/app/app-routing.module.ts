import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './students/add/add.component';
import { DisplayComponent } from './students/display/display.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'students',
    children: [
      {
        path: 'add',
        component: AddComponent
      },
      {
          path: 'display',
          component: DisplayComponent
      }
  ]
}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
