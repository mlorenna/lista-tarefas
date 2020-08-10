import { Menu } from './../../shared/interfaces/menu';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly ACCESS_TOKEN = 'ACCESS_TOKEN'
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN'
  private readonly TOKEN_TYPE = 'TOKEN TYPE'
  
  private readonly MENU = 'MENU'
  private menu: Array<Menu> = []

  constructor(
    private http: HttpClient
    ) { }

  login(): Observable<any> {
    return this.http.post<any>(`/accounts/oauth/token?grant_type=password&response_type=token&client_id=demo&username=lorenna.martins@desafiofluig.com&password=Lorenna@123`, {}, {
      headers: new HttpHeaders({
        'content-type' : '	application/json;charset=UTF-8',
        'Authorization': 'Basic ZGVtbzpzU2R4T1lEQU0zRkJO'
      })
    }).pipe(
      tap(tokens => this.storeData(tokens)),
      mapTo(true),
      catchError(error => {
        alert(JSON.stringify(error.error));
        return of(false)
      })
    )
  }

  refreshToken(){

  }

  isLoggedIn() {
    return !!this.getAccessTokenAndType();
  }

  private storeData(tokens){
    this.storeTokens(tokens)
    this.storeMenu()
  }

  private storeTokens(tokens) {
    localStorage.setItem(this.ACCESS_TOKEN, tokens.access_token)
    localStorage.setItem(this.TOKEN_TYPE, tokens.token_type)
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token)
  }

  private storeMenu(){
    this.menu = this.mountMenu()
    localStorage.setItem(this.MENU, JSON.stringify(this.menu))
  }

  private mountMenu(){
   return [{
      label: 'Lista de Tarefas',
      icon: 'lni lni-list',
      path: '/home/to-do-list',
      disabled: false
    },
    {
      label: 'Arquivado',
      icon: 'lni lni-archive',
      path: '/home/archives',
      disabled: true
    }
  ]
  }

  getMenu():Menu{
    return JSON.parse(localStorage.getItem(this.MENU))
  }

  getAccessTokenAndType(){
    return (localStorage.getItem(this.ACCESS_TOKEN), localStorage.getItem(this.TOKEN_TYPE))
  }

}
