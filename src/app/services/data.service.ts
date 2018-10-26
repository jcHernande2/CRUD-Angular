import { Injectable } from '@angular/core';
import{InfoPersonal} from "../models/info-personal";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  DatosPersonales:InfoPersonal[]=[];

  constructor() { 
    //this.DatosPersonales=new Array();
  }
  getInfoPersonal():InfoPersonal[]{
    if(localStorage.getItem["DatosPersonales"]===null)
    {
      this.DatosPersonales=[];
    }
    else{
      this.DatosPersonales=JSON.parse(localStorage.getItem("DatosPersonales"));
    }
    return this.DatosPersonales;
  }
  addInfoPersonal(DatoPersonal:InfoPersonal):void{
   
    //var result = Object.keys(DatoPersonal).map(function(key) {
     // return DatoPersonal[key];
    //});
   console.log(DatoPersonal);
  // this.DatosPersonales.push(DatoPersonal);
    //this.DatosPersonales.unshift(DatoPersonal);
    let DatosPersonales;
    if(localStorage.getItem("DatosPersonales")===null)
    {
      DatosPersonales=[];
      DatosPersonales.unshift(DatoPersonal);
      localStorage.setItem("DatosPersonales",JSON.stringify(DatosPersonales));
    }else{
      DatosPersonales=JSON.parse(localStorage.getItem("DatosPersonales"));
      DatosPersonales.unshift(DatoPersonal);
      localStorage.setItem("DatosPersonales",JSON.stringify(DatosPersonales));
    }
    //this.getInfoPersonal();
  }
  removeInfoPersonal(DatoPersonal:InfoPersonal){
  //console.log("entro a eliminar");
  //console.log(DatoPersonal);
    for(let i=0;i<this.DatosPersonales.length;i++){
      if(DatoPersonal==this.DatosPersonales[i])
      {
        this.DatosPersonales.splice(i,1);
        localStorage.setItem("DatosPersonales",JSON.stringify(this.DatosPersonales));
      }
    }
  }
  DatoPersonalUpdate(DatoPersonal:InfoPersonal):void{
    for(let i=0;i<this.DatosPersonales.length;i++){
      if(DatoPersonal.email==this.DatosPersonales[i].email)
      {
        //console.log("entro a cambiar");
        this.DatosPersonales[i]=DatoPersonal;
        //this.DatosPersonales.splice(i,1);
        localStorage.setItem("DatosPersonales",JSON.stringify(this.DatosPersonales));
      }
    }
   
    
  }
 
}
