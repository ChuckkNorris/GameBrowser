import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const GIANTBOMB_API_KEY: string = "19806379abe6beaf668b2e3a60233e64eb72d04a";
const BASE_URL: string = "http://www.giantbomb.com/api/game/3030-4725/?api_key=19806379abe6beaf668b2e3a60233e64eb72d04a&format=json";
const FILTER = "&field_list=genres,name";

@Injectable()
export class GameService {
    constructor(private _http: Http) {

    }
    public getGames() {
        this._http.get(BASE_URL).subscribe(x => {
            console.log(x);
        })
    }
}