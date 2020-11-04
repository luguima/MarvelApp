import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CreatorService {
    public baseUrl = "https://gateway.marvel.com:443/v1/public/creators";

    constructor(
        private http: HttpClient
    ) { }

    public composeQueryParam(url) {
        const md5 = new Md5();
        var token = md5.appendStr(`1${environment.hash}${environment.apiKey}`).end();
        console.log(token);
        var newUrl = `${url}?ts=1&apikey=${environment.apiKey}&hash=${token}`;
        console.log(newUrl);
        return newUrl;
    }

    public getCharacters() {
        return this.http.get(this.composeQueryParam(this.baseUrl));
    }
}