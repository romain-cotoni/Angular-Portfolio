import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  user!: { firstName: string; lastName: string; };

  ngOnInit() {
    // hardcoded example
    this.user = { firstName: 'Romain', lastName: 'Cotoni' };
  }
}
