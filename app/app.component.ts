import { Component } from '@angular/core';
import { GameService } from './services/game.service';
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1> <button (click)="getGames()">Click Me</button>',
  providers: [GameService]
})
export class AppComponent { 
  /**
   *
   */
  constructor(private _gameService: GameService) {
    
    
  }
  getGames(){
    console.log('yes')
    this._gameService.getGames();
  }

}
