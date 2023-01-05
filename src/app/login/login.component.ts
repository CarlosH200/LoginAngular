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
  tipoInput = 'password';
  hide = true;

   isHidden() {
    if (this.tipoInput == 'password') {
      this.tipoInput= 'text'
    } else {
      this.tipoInput='password'      
    }
    
  }
}
