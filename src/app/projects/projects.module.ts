import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { SummaryProjectComponent } from './summary-project/summary-project.component';


@NgModule({
  declarations: [
    ListProjectsComponent,
    SummaryProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
