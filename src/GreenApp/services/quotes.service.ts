import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/Rx'

@Injectable()
export class QuotesService {
    baseUrl: String

    createAuthorizationHeader(headers: Headers) {
        headers.append('X-Mashape-Key', '<key>');
        headers.append('Accept', 'application/json');
    }

    constructor(private http: Http) {
        this.baseUrl = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1'
    }

    getQuote() {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.baseUrl.toString(), {
            headers: headers
        })
            .map(res => res.json())
    }
}
