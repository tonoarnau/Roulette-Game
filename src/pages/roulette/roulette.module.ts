import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoulettePage } from './roulette';

@NgModule({
  declarations: [
    RoulettePage,
  ],
  imports: [
    IonicPageModule.forChild(RoulettePage),
  ],
})
export class RoulettePageModule {}
