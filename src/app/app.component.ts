import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Portfolio';
  showHeader = true;

  constructor(private router: Router) {
    this.router = router;
  }

  isShowHeader() { 
    console.log(this.router.url);
    if (this.router.url === '/login') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }
}
