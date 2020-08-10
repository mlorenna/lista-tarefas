import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _close = new Subject();

  constructor() { }
  
  public close() {
    this._close.next();
  }
}
