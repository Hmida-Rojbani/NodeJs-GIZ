import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddComponent } from './add/add.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AddComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
