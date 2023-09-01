import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  viewPassword: boolean = true;
  typeInputPassword: string = 'password';


  viewDatosPassword() {
    if (this.viewPassword) {
      this.viewPassword=false;
      this.typeInputPassword = 'text';
    } else {
      this.viewPassword = true;
      this.typeInputPassword = 'password';
    }
  }
}

