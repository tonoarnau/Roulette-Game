import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PlayersProvider {

  //Define a variable-array to store our players
  private players = [];

  constructor(public http: Http) {
    console.log('Hello PlayersProvider Provider');
  }

  //Define our methods
  addPlayer(player) {
    this.players.push(player);
  }

  getPlayer(){
    return this.players;
  }

  removePlayer(){
    this.players.pop();
  }
}
