import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  private isOpen = false;
  private toggleSidebarSubject = new Subject<void>();
  toggleSidebar$ = this.toggleSidebarSubject.asObservable();

  toggleSideBar() {
    this.isOpen = !this.isOpen;
  }

  isSideBarOpen() {
    return this.isOpen;
  }
}
