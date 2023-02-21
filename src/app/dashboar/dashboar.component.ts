import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboar',
  templateUrl: './dashboar.component.html',
  styleUrls: ['./dashboar.component.css']
})
export class DashboarComponent implements OnInit {
Modulos: any = [];


  constructor() { }

  ngOnInit(): void {
    console.log(MENU);
   
  }
 menu = MENU;
  
  
  
}

const MENU = [
  {id: 1, name:'POS', screen: 'login'},
  {id: 2, name:'INVENTARIO', screen: 'login'},
  {id: 5, name:'COMPRAS', screen: 'login'},
  {id: 3, name:'EMPRESA', screen: 'login'},
  {id: 4, name:'CONFIGURACION', screen: 'login'}
];

