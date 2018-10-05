import { Injectable } from '@angular/core';
import{InfoPersonal} from "../models/info-personal";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  DatosPersonales:InfoPersonal[]=[
    {
    name: "fer juan",
    email: "juan@hiis",
    number:0,
    occupation:" string",
    phone: "string",
    textarea: ""
    },
    {
      name: "juan",
      email: "hhjuan27@g",
      number:0,
      occupation:" string",
      phone: "string",
      textarea: ""
      }
  ];

  constructor() { 
    //this.DatosPersonales=new Array();
  }
  getInfoPersonal():InfoPersonal[]{
    /*if(localStorage.getItem["DatosPersonales"]===null)
    {
      this.DatosPersonales=;
    }
    else{*/
     // this.DatosPersonales=JSON.parse(localStorage.getItem("DatosPersonales"));
   // }
    return this.DatosPersonales;
  }
  addInfoPersonal(DatoPersonal:InfoPersonal):void{
   
    //var result = Object.keys(DatoPersonal).map(function(key) {
     // return DatoPersonal[key];
    //});
   console.log(DatoPersonal);
  // this.DatosPersonales.push(DatoPersonal);
    this.DatosPersonales.unshift(DatoPersonal);
    let DatosPersonales;
    if(localStorage.getItem("DatosPersonales")===null)
    {
      DatosPersonales=[];
      DatosPersonales.unshift(DatoPersonal);
      localStorage.setItem(" DatosPersonales",JSON.stringify(DatosPersonales));
    }else{
      DatosPersonales=JSON.parse(localStorage.getItem("DatosPersonales"));
      DatosPersonales.unshift(DatoPersonal);
      localStorage.setItem(" DatosPersonales",JSON.stringify(DatosPersonales));
    }
  }
  removeInfoPersonal(DatoPersonal:InfoPersonal){
    for(let i=0;this.DatosPersonales.length;i++){
      if(DatoPersonal==this.DatosPersonales[i])
      {
        this.DatosPersonales.splice(i,1);
        localStorage.setItem("DatosPersonales",JSON.stringify(this.DatosPersonales));
      }
    }
  }
 
}
