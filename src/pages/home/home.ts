import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/* Reusable animation */
import { slideAnimation, fadeAnimation } from '../../app/animations';

import { trigger, state, style, animate, transition } from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('splashy', [
      state('inactive', style({
        transform: 'translateY(-100%)'
      })),
      state('active', style({
        transform: 'translateY(0%)'
      })),
      transition('* => active', animate('300ms ease-in')),
      transition('active => *', animate('300ms ease-out'))
    ]),
    trigger('slidy', [
      transition('* => *', slideAnimation),
    ]),
    trigger('fady', [
      transition('* => *', fadeAnimation),
    ])
  ]
})
export class HomePage {
  title:string = "Welcome User!";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  startGame() {
    this.navCtrl.push('RoulettePage');
  }

}
