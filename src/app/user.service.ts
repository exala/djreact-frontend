import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()
export class UserService{

    constructor(private http: HttpClient) {}

    loginUser(userData: string): Observable<any> {
        return this.http.post('http://3.82.6.241:8000/api/token/', userData);
    }
}