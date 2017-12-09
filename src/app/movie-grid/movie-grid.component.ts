import { Component, OnInit } from '@angular/core';
import { Movie } from '../service/movie';
import { LoadMovieService } from 'app/service/load-movie.service';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {

  selectedMovie; movies:Movie[];
  /*movies = [
    {
      "id": 11,
      "name": "Marvel's Captain America: Civil War",
      "description": "Marvel’s Captain America: Civil War picks up where - Avengers: Age of Ultron - left off, as Steve Rogers leads the new team of Avengers in their continued efforts to safeguard humanity. After another international incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability and a governing body to determine when to enlist the services of the team. The new status quo fractures the Avengers while they try to protect the world from a new and nefarious villain.",
      "imgPath": "app/images/civilwar.jpg",
      "duration": 148,
      "genre": ['Action','Adventure'],
      "language": "English",
      "mpaaRating": {
        "type" : "PG",
        "label": "Some Violence"
      },
      "userRating": "5"
    },
    {
      "id": 12,
      "name": "Money Monster",
      "description": "In the real-time, high stakes thriller Money Monster, George Clooney and Julia Roberts star as financial TV host Lee Gates and his producer Patty, who are put in an explosive situation when an irate investor who has lost everything (Jack O’Connell) forcefully takes over their studio. During a tense standoff broadcast to millions on live TV, Lee and Patty must work furiously against the clock to unravel the mystery behind a conspiracy at the heart of today's fast-paced, high-tech global markets.",
      "imgPath": "app/images/moneymonster.jpg",
      "duration": 99,
      "genre": ['Thriller'],
      "language": "English",
      "mpaaRating": {
        "type" : "M18",
        "label": "Sexual Scene and Coarse Language"
      },
      "userRating": "3"
    },
    {
      "id": 13,
      "name": "Twenty Four",
      "description": "This sci-fi thriller is about time travel, the one thing that humans cannot control... but what if someone has the power to do so?",
      "imgPath": "app/images/twentyfour.jpg",
      "duration": 163,
      "genre": ['Thriller'],
      "language": "Tamil",
      "mpaaRating": {
        "type" : "PG",
        "label" : "Some Violence"
      },
      "userRating": "4"
    },
    {
      "id": 14,
      "name": "Bad Neighbours 2",
      "description": "Returning stars Seth Rogen, Zac Efron and Rose Byrne are joined by Chloë Grace Moretz for Neighbors 2: Sorority Rising, the follow-up to 2014’s most popular original comedy. Nicholas Stoller again directs in a film that follows what happens when the will of parenthood goes against the bonds of sisterhood. Now that Mac (Rogen) and Kelly Radner (Byrne) have a second baby on the way, they are ready to make the final move into adulthood: the suburbs. But just as they thought they’d reclaimed the neighborhood and were safe to sell, they learn that the new occupants next door are a sorority even more out of control than Teddy (Efron) and his brothers ever dreamed of being.",
      "imgPath": "app/images/badneighbours.jpg",
      "duration": 110,
      "genre": ['Comedy'],
      "language": "English",
      "mpaaRating": {
        "type" : "R21",
        "label": "Sexual Content & Drug Use"
      },
      "userRating": "2"
    }
  ];
*/

  constructor( private movieService: LoadMovieService) {
    this.movies = this.movieService.getMovies();
  }

  ngOnInit() {
    this.selectedMovie = this.movies[0];
  }

  showMovieDetails(movie) {
    this.selectedMovie = movie;
  }

}
