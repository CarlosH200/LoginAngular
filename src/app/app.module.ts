import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { DashboarComponent } from './dashboar/dashboar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PruebaComponent } from './components/prueba/prueba.component';
import { NewRegistroComponent } from './components/new-registro/new-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboarComponent,
    LoginComponent,
    PruebaComponent,
    NewRegistroComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    // DEFINE LAS RUTAS PARA NAVEGAR ENTRE PAGINAS
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboarComponent },
      { path: 'login', component: LoginComponent },
      { path: '', component: LoginComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
