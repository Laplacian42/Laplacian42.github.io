import { Component, OnInit } from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition
  }
    from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOutX', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1500)
      ]),
      transition('* => void', [
        animate(1500, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('flyInOutY', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(+1000%)' }),
        animate(1500)
      ]),
      transition('* => void', [
        animate(1500, style({ transform: 'translateY(-1000%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  public statements = [
      {'statement': 'Machine Learning is also only optimization.', 'author': 'Michael Wutz'},
      {'statement': "AWS Services without CDK support should be forbidden.", 'author': 'Michael Wutz'},
      {'statement': "I'm too small for vendor lock in", 'author': 'Michael Wutz'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
