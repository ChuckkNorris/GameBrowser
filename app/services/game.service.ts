import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

const GIANTBOMB_API_KEY: string = "19806379abe6beaf668b2e3a60233e64eb72d04a";
const BASE_URL: string = "http://www.giantbomb.com/api/game/3030-4725/?api_key=19806379abe6beaf668b2e3a60233e64eb72d04a&format=json";
const IGB_DB: string = "https://igdbcom-internet-game-database-v1.p.mashape.com/companies/";
const ZELDA_URL: string = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=10&offset=0&order=release_dates.date%3Adesc&search=zelda"
const IGDB_KEY = "r4yJxhWysqmshxNldmE4ExKFwONzp1DLu2Vjsna4LbVzRtBXqr";
@Injectable()
export class GameService {
    constructor(private _http: Http) {
        
    }
    public getGames() {
        let header: Headers = new Headers();
        header.append('X-Mashape-Key', IGDB_KEY);
        this._http.get(ZELDA_URL, {headers: header}).subscribe(x => {
            console.log(x);
        })
    }
}