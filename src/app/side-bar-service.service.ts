import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  private isOpenSubject = new BehaviorSubject<boolean>(true);
  public isOpen$ = this.isOpenSubject.asObservable();

  constructor() { }

  setSideBarState(isOpen: boolean) {
    this.isOpenSubject.next(isOpen);
  }

  getSideBarState(){
    return this.isOpenSubject.value;
  }

  toggleSideBar() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }
}
