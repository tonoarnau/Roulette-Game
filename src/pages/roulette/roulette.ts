import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { slideAnimation, fadeAnimation } from '../../app/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';

//Service
import { PlayersProvider } from './../../providers/players/players';

@IonicPage()
@Component({
  selector: 'page-roulette',
  templateUrl: 'roulette.html',
  animations: [
    trigger('rotaty', [
      state('inactive', style({
        transform: 'rotate(0deg)',
        transformOrigin: '50% 50%',
      })),
      state('active', style({
        transform: 'rotate(360deg)',
        transformOrigin: '50% 50%',
      })),
      transition('* => active', animate('800ms ease-in-out'))
    ]),
    trigger('scory', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.2)'
      })),
      transition('* => active', animate('800ms ease-in-out')),
      transition('active => inactive', animate('800ms ease-in-out'))
    ]),
    trigger('slidy', [
      transition('* => *', slideAnimation),
    ]),
    trigger('fady', [
      transition('* => *', fadeAnimation),
    ])
  ]
})
export class RoulettePage {
  player:Array<any>;
  visibleState:string = 'inactive';
  rdmNumber:number;
  result:string;
  points:number;
  scoreTab:Array<any> = [0];
  total:any = 0;
  scoreState:string = 'inactive';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toast: ToastController,
    private playerProvider: PlayersProvider) {
      this.player = playerProvider.getPlayer();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoulettePage');
  }

  backHome() {
    this.player.pop();
    this.navCtrl.push('HomePage');
  }

  goGame(){
    try {
      this.visibleState = 'active';
      this.scoreState = 'inactive';
      this.rdmNumber = Math.floor(Math.random() * 10);
      setTimeout(() => {
        this.visibleState = 'inactive';
        if(this.rdmNumber > 4) {
          this.result = "YOU WIN!";
          this.points = 5;
          this.scoreState = 'active';
          this.scoreTab.push(this.points);
          this.total = this.scoreTab.reduce((a,b) => {
            return a + b;
          });
        } else {
          this.result = "YOU LOSE!";
          this.points = 0;
        };
        let alert = this.alertCtrl.create({
          title: this.result,
          subTitle: `You've got ${this.points} points`,
          buttons: [
            {
              text: 'Play Again'
            }
          ]
        });
        alert.present();
      }, 900)
    }
    catch(e){
      console.error(e);
    }

  }




}
