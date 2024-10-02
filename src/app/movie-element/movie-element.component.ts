import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MovieDetails } from '../movie-details';

@Component({
  selector: 'app-movie-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-element.component.html',
  styleUrl: './movie-element.component.css',
})
export class MovieElementComponent {
  @Input() movie!: MovieDetails;
  constructor() {}
}
