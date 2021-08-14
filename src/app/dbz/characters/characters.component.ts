import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

  /*@Input('data')
  characters: Character[] = [];*/

  get characters ()
  {
    return this.dbzServices.characters;
  }

  constructor(private dbzServices: DbzServices) { }

  ngOnInit(): void {
  }
}
