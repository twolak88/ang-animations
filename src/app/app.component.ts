import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highligted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highligted', animate(300)),
      // transition('highligted => normal', animate(800))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highligted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(0.5)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highligted', animate(300)),
      transition('highligted => normal', animate(800)),
      transition('shrunken <=> *', animate(500))
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state = (this.state === 'normal' ? 'highligted' : 'normal');
    this.wildState = (this.wildState === 'normal' ? 'highligted' : 'normal');
  }

  onShrink() {
    console.log('aAAAAAAAAAAAAAa')
    this.wildState = 'shrunken';
    console.log(this.wildState)
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
