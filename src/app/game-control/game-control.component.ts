import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  interval;
  counter = 0;

  @Output() intervalFired = new EventEmitter<number>();

  onStart(){

    this.interval =
      setInterval(() =>
        {
          this.intervalFired.emit(this.counter);
          this.counter++;
        },
        1000);
  }

  onStop(){
    console.log('stop');
    clearInterval(this.interval);
  }

}
