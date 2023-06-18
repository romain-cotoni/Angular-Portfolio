import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    TranslateModule,
    MatSlideToggleModule
  ]
})
export class SharedModule { 
  language: string = 'en';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('fr');
    //translate.use('fr'); 
  }
}
