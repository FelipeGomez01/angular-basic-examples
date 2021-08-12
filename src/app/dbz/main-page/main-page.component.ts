import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent
{
  characters: Character[] =
  [
    {
      name: "Goku",
      power: 15000
    },
    {
      name: "Vegeta",
      power: 7500,
    }
  ];

  character: Character =
  {
    name: "",
    power: 0,
  };

  addNewCharacter(value: Character)
  {
    this.characters.push(value);
    console.log(value);
  }
}
