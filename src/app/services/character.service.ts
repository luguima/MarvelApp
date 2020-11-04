import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {
    public baseUrl = "https://gateway.marvel.com:443/v1/public/characters";

    constructor(
        private http: HttpClient
    ) { }

    public composeQueryParam(url, offset) {
        const md5 = new Md5();
        var token = md5.appendStr(`1${environment.hash}${environment.apiKey}`).end();
        var newUrl = "";
        if (offset == 0)
            newUrl = `${url}?ts=1&apikey=${environment.apiKey}&hash=${token}`;
        else
            newUrl = `${url}?offset=${offset}&ts=1&apikey=${environment.apiKey}&hash=${token}`;

        return newUrl;
    }

    public getCharacters(offset) {
        return this.http.get(this.composeQueryParam(this.baseUrl, offset));
    }
}