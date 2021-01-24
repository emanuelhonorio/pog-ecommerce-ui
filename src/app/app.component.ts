import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from './core/models/api-models';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public user: Usuario = null;
  private authContext$: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.init();
  }

  ngOnDestroy() {
    if (this.authContext$) {
      this.authContext$.unsubscribe();
    }
  }

  async init() {
    if (this.authService.isLoggedIn()) {
      try {
        await this.authService.initContext();
      } catch (err) {
        this.authService.logout();
        this.router.navigateByUrl('/signin');
      }
    }
    this.authContext$ = this.authService.userObservable.subscribe((user) => {
      this.user = user;
    });
  }
}
