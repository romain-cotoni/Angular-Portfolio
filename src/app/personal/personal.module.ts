import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CvComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
