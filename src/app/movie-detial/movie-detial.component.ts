import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-detial',
  templateUrl: './movie-detial.component.html',
  styleUrls: ['./movie-detial.component.css']
})
export class MovieDetialComponent implements OnInit {

  @Input() movie; isAdult = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.movie) {
      if (this.movie.mpaaRating.type == "M18") {
        this.isAdult = true;
      } else {
        this.isAdult = false;
      }
    }
  }
}
