import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.authService.login()
    .subscribe(response => {if(response) this.router.navigate(['./home/to-do-list'])})
  }

}
