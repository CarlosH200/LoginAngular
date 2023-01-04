import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginAngular';
  tipoInput = 'password';

   isHidden() {
    if (this.tipoInput == 'password') {
      this.tipoInput= 'text'
    } else {
      this.tipoInput='password'      
    }
    
  }




}
