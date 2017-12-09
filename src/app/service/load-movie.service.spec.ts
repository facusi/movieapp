/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadMovieService } from './load-movie.service';

describe('LoadMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadMovieService]
    });
  });

  it('should ...', inject([LoadMovieService], (service: LoadMovieService) => {
    expect(service).toBeTruthy();
  }));
});
