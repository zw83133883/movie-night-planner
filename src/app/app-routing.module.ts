import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route should be defined first
  // Define other routes here
  // { path: 'movies', component: MoviesComponent }, // Example route for MoviesComponent
  // { path: 'tv-shows', component: TvShowsComponent }, // Example route for TvShowsComponent
  // { path: 'live-tv', component: LiveTvComponent }, // Example route for LiveTvComponent
  // { path: 'collections', component: CollectionsComponent }, // Example route for CollectionsComponent
  // Catch-all route should be defined at the end
  { path: '**', redirectTo: '' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
