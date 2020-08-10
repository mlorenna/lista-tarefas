import { Menu } from './../../../../shared/interfaces/menu';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.sass']
})
export class MenuListComponent implements OnInit {

  @Input() menu: Menu

  constructor() { }

  ngOnInit(): void {
    
  }

}
