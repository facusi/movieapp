import { Injectable } from '@angular/core';
import { MOVIES } from './mock-movies';

@Injectable()
export class LoadMovieService {

  constructor() { }

  getMovies() {
		return MOVIES;
	}

}
