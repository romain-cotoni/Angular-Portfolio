import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Portfolio';
  showHeader = true;

  constructor(private router: Router/*, translate: TranslateService*/) {
    /*translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    //translate.use('fr');*/
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
