import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.sass']
})
export class MenuBarComponent implements OnInit {

  private _menuState = {
    "CLOSED": "closed",
    "LEAVING": "leaving",
    "OPENING": "opening",
    "OPEN": "open",
    "DELAY": 400,
    "GAP": 70,
    "QUEUE": [],
    "RUNNING": false
  };

  public controller: 'closed' | 'leaving' | 'opening' | 'open' = 'closed';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  openMenu(){
    this._menuState.QUEUE.push('open');
    if (!this._menuState.RUNNING) {
      this._run();
    }
  }

  closeMenu() {
    this._menuState.QUEUE.push('close')
    if (!this._menuState.RUNNING) {
      this._run();
    }
  }

  private _run() {
    this._menuState.RUNNING = true;
    let command = this._menuState.QUEUE[0];
    this._menuState.QUEUE.splice(0, 1);
    
    this[`_${command}`]();
  }

  private _open() {
    this.controller = 'opening';
    setTimeout(() => this.controller = 'open', this._menuState.DELAY);
    setTimeout(() => this._postRun(), this._menuState.DELAY);
  }

  private _postRun() {
    if (this._menuState.QUEUE.length > 0) {
      setTimeout(() => this._run(), this._menuState.DELAY / 2);
    }
    this._menuState.RUNNING = false;
  }

  private _close() {
    this.controller = 'leaving';
    setTimeout(() => this.controller = 'closed', this._menuState.DELAY + this._menuState.GAP);
    setTimeout(() => this._postRun(), this._menuState.DELAY + this._menuState.GAP);
  }

}
