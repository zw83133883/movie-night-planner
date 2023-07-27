import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMovieContentComponent } from './main-movie-content.component';

describe('MainMovieContentComponent', () => {
  let component: MainMovieContentComponent;
  let fixture: ComponentFixture<MainMovieContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMovieContentComponent]
    });
    fixture = TestBed.createComponent(MainMovieContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
