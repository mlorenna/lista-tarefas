import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { AuthService } from './../auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable()
export class HomeInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(
    public authService: AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.getAccessTokenAndType()) request = this.addToken(request, this.authService.getAccessTokenAndType())

    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handleError401(request, next);
      } else {
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, tokenData) {
    return request.clone({
      setHeaders: {
        'Authorization': `${tokenData.type} ${tokenData.token}`
      }
    });
  }

  private handleError401(request: HttpRequest<unknown>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null)

      return this.authService.login().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false
          this.refreshTokenSubject.next(token.access_token);
          return next.handle(this.addToken(request, token))
        })
      )
    } else {
      return this.refreshTokenSubject.pipe(
        switchMap((token: any) => next.handle(this.addToken(request, token)))
      );
    }
  }

}
