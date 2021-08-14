import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzServices
{
    private _characters: Character[] =
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

    constructor(){}

    get characters(): Character[]
    {
        return [...this._characters];
    }

    addCharacters(character: Character)
    {
        this._characters.push(character);
    }
}