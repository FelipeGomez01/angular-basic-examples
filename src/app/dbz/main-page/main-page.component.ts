import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent
{
  character: Character =
  {
    name: "",
    power: 0,
  };
  
  constructor(private dbzService: DbzServices)
  {
      
  }
}
