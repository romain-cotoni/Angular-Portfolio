import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  { path: ''       , component: CvComponent },
  { path: 'cv'     , component: CvComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about'  , component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
