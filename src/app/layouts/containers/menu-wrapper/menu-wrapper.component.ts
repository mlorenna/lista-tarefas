import { MenuService } from './../../../core/menu.service';
import { Menu } from './../../../shared/interfaces/menu';
import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-wrapper',
  templateUrl: './menu-wrapper.component.html',
  styleUrls: ['./menu-wrapper.component.sass']
})
export class MenuWrapperComponent implements OnInit {

  menuList: Menu

  constructor(
    private authService: AuthService,
    private menuService: MenuService
    ) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()) this.menuList = this.authService.getMenu()   
  }

  close() {
    this.menuService.close();
  }

}
