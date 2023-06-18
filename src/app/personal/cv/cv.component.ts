import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {

  arrowup = "assets/icons/arrow-up.png";
  arrowdown = "assets/icons/arrow-down.png"
  collapsed = false;

  map = new Map<string, boolean>([
    ['skills', false],
    ['experiences', false],
    ['af', true],
    ['infotel', true],
    ['gns', true],
    ['training', false],
    ['cda', true],
    ['dwwm', true],
    ['languages', false],
    ['anglais', true],
    ['espagnol', true],
    ['leisures', false],
  ]);


  collapseToggleOne(value: string) {
    this.map.set(value, !this.map.get(value));
  }
  
  collapseToggleAll() {
    this.map.forEach( (_,key) => { this.map.set(key, this.collapsed) })
    this.collapsed = !this.collapsed;
  }


}
