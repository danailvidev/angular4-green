import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { UserApi } from '../../GreenApp/users/user-api';

@Injectable()
export class UserService implements UserApi {

    isAuthenticated = false;
    userName = '';

    constructor(private router: Router) { }

    signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
        console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
        if (username != "asd" || password != "asd") {
            return Observable.of({}).delay(2000).flatMap(x => Observable.throw('Invalid User Name and/or Password'));
        }
        this.userName = username;
        this.isAuthenticated = true;
        return Observable.of({}).delay(2000);

    }

    signOut(): Observable<any> {
        this.isAuthenticated = false;
        this.router.navigate(['/signin']);
        return Observable.of({});
    }

    getUsername(): string {
        return this.userName;
    }

}