import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Usuario } from '../models/api-models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private LSTokenKey = environment.LSTokenKey;
  private jwtHelper = new JwtHelperService();
  private baseApiURL = environment.baseApiUrl;

  // auth context - current authenticated user
  private userBS = new BehaviorSubject<any>(null);
  public userObservable = this.userBS.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn() {
    try {
      const jwtToken = this.getAccessToken();
      // has token and its not expired
      return !!jwtToken && !this.jwtHelper.isTokenExpired(jwtToken);
    } catch (err) {
      return false;
    }
  }

  signIn(email: string, password: string) {
    // POST /signin
    // Put token in local storage
    // Update auth context
    // return response

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic YW5ndWxhcjpAbmd1bEByMA==',
    });

    let payload = new HttpParams();
    payload = payload.append('grant_type', 'password');
    payload = payload.append('username', email);
    payload = payload.append('password', password);

    return this.http
      .post(`${this.baseApiURL}/oauth/token`, payload, { headers })
      .toPromise()
      .then((response: any) => {
        localStorage.setItem(this.LSTokenKey, response.access_token);
        return this.getMe();
      });
  }

  logout(): void {
    localStorage.removeItem(this.LSTokenKey);
    this.userBS.next(null);
  }

  logoutAndRedirect(): void {
    this.logout();
    this.router.navigateByUrl('/entrar');
  }

  signUp(user: Usuario) {
    return this.http.post(`${this.baseApiURL}/register`, user).toPromise();
  }

  async initContext() {
    try {
      const user: Usuario = await this.getMe();
      return Promise.resolve(user);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  getMe() {
    return this.http
      .get(`${this.baseApiURL}/me`)
      .toPromise()
      .then((response: Usuario) => {
        this.userBS.next(response);
        return response;
      });
  }

  updateMe(name, image_url) {
    const body: any = { name };
    if (image_url) {
      body.image_url = image_url;
    }
    return this.http
      .put(`${this.baseApiURL}/profile`, body)
      .toPromise()
      .then((response: any) => {
        this.userBS.next(response);
        return response;
      });
  }

  getAccessToken() {
    return localStorage.getItem(this.LSTokenKey);
  }
}
