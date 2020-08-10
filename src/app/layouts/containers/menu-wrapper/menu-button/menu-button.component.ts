import { Menu } from './../../../../shared/interfaces/menu';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.sass']
})
export class MenuButtonComponent implements OnInit {

  @Input() menu: Menu

  constructor() { }

  ngOnInit(): void {
  }

}
