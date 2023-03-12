import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '', 
  //   loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule) 
  // },
  { 
    path: 'personal', 
    loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule) 
  },
  { 
    path: 'projects', 
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
