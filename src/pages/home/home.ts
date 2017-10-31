import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

//Service
import { PlayersProvider } from './../../providers/players/players';

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
  public players = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastController: ToastController,
    private playerService: PlayersProvider,) {
      this.players = this.playerService.getPlayer();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  startGame() {
    let newPlayer = this.alertCtrl.create({
      title: "Nice to meet you, stranger",
      message: "What's your name?",
      inputs: [
        {
          type: 'text',
          name: 'addYourName',
          placeholder: 'Type your name...'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: (inputData) => {
            let playerName;
            playerName = inputData.addYourName;
            this.playerService.addPlayer(playerName);

            newPlayer.onDidDismiss(() => {
              let addPlayerToast = this.toastController.create({
                message: 'Player saved',
                duration: 2000
              });
              addPlayerToast.present();
              this.navCtrl.push('RoulettePage');
            });

          }
        }
      ]
    });
    newPlayer.present();
  }

}
