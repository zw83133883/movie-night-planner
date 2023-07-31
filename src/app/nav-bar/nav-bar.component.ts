import { Component, OnInit } from '@angular/core';
import { SideBarService } from '../side-bar-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private sideBarService : SideBarService) {}
  onMenuClick(): void{
    this.sideBarService.toggleSideBar();
  }
}
