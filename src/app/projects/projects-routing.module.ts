import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { SummaryProjectComponent } from './summary-project/summary-project.component';

const routes: Routes = [
  { path: ''             , component: ListProjectsComponent },
  { path: 'list-projects', component: ListProjectsComponent },
  { path: 'project/:id'  , component: SummaryProjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
