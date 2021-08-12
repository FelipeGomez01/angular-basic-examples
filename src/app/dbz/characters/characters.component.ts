import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

  @Input('data')
  characters: Character[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
