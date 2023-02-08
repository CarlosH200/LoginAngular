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
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 5, name:'BatGirl'},
  {id: 3, name:'Robin'},
  {id: 4, name:'Flash'}
];

