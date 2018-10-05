import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  interpolacion="ety apre"
  url="https://www.google.com";
  Activo=false;
  interpolarOtra(){
    this.interpolacion="Aprendiendo eventos";
  }
  intercambiar(){
    this.Activo=!this.Activo;
  }
  constructor() { }

  ngOnInit() {
  }

}
