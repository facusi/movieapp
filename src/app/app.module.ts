import { LoadMovieService } from './service/load-movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MovieDetialComponent } from './movie-detial/movie-detial.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieGridComponent,
    MovieDetialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LoadMovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
