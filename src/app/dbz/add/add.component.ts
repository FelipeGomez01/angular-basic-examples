import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit
{
  @Input('newCharacter')
  character: Character =
  {
    name: "",
    power: 0,
  };

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  add()
  {
    if(this.character.name.trim().length == 0)
    {
      return;
    }

    this.onNewCharacter.emit(this.character);
    this.character = {name: "", power: 0};
  }

}
