import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent {
  imagePath="assets/icons/conception.png"

  constructor(private router: Router) {
    this.router = router;
  }

  selectProject(projectId: number) {
    this.router.navigate(['projects/project/' + projectId]);
  }

}
