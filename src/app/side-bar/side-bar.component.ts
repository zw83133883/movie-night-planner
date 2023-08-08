import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SideBarService } from '../side-bar-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('open', style({
        transform: 'translateX(0)'
      })),
      state('closed', style({
        transform: 'translateX(-100%)'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ])
    ])
  ]
})
export class SideBarComponent implements OnInit{
  isOpen = true;

  constructor(private sideBarService : SideBarService) { }

  ngOnInit() {
    this.sideBarService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
      console.log(this.isOpen);
    });
  }
}
