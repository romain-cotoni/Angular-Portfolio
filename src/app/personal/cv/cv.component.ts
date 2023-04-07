import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {

  showAll = false;

  map = new Map<string, boolean>([
    ['airfrance', false],
    ['infotel', false],
    ['gns', false],
    ['afpa-cda', false],
    ['afpa-dwwm', false],
    ['anglais', false],
    ['espagnol', false],
  ]);

  collapse(value: string) {
    this.map.set(value, !this.map.get(value));
  }

  collapseAll() {
    this.showAll = !this.showAll;
    this.map.forEach((_,key) => { this.map.set(key, this.showAll) })
  }


}
