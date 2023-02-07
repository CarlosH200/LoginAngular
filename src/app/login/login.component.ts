import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  inputEmail: string = '';
  inputPassword: string = '';
  User = 'admin';
  password = '123';
  islogin = false;

  isLogin() {
    if (this.inputEmail == this.User && this.inputPassword == this.password) {
      this.islogin = true
      alert('SESION INICIADA EXITOSAMENTE');
      this.router.navigateByUrl("dashboard");

    } else {
      this.islogin = false
      alert('USUARIO O CONTRASEÑA INCORRECTOS');
      this.router.navigateByUrl("login");
    }


  }

}



