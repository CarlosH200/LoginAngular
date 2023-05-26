import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-registro',
  templateUrl: './new-registro.component.html',
  styleUrls: ['./new-registro.component.css']
})
export class NewRegistroComponent implements OnInit {

  constructor() { }

inputNombres: string = '';
inputApellidos: string = '';
inputNombreCompleto: string = '';
inputTelefono: number = 0;
inputEmail: string = '';
inputDPI: string = '';




  ngOnInit(): void {
  }
}