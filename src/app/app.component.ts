import { Component } from '@angular/core';
import { SideBarService } from './side-bar-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-night-planner';
  isOpen = true;
  
  constructor(private sideBarService: SideBarService) {
    this.sideBarService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  toggleSideBar() {
    this.sideBarService.toggleSideBar();
  }
}
