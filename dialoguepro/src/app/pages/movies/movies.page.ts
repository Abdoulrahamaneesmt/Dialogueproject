import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
 
  constructor(public service:MovieService,
      public movieService:MovieService) { 
   
  }

  ngOnInit() {
  }
 

}
