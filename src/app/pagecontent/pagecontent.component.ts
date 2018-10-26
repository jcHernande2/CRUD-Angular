import { Component, OnInit,EventEmitter,Input} from '@angular/core';
import {InfoPersonal} from "../models/info-personal";
import {DataService} from "../services/data.service";
@Component({

  selector: 'app-pagecontent',
  templateUrl: './pagecontent.component.html',
  styleUrls: ['./pagecontent.component.css']
})
export class PagecontentComponent implements OnInit {
  DatosPersonales:InfoPersonal[];
  datoInfoEdit:InfoPersonal;
  nombreusuario:string;
  constructor(public dataService:DataService) { 
    

  }

  ngOnInit() {
    this.DatosPersonales=this.dataService.getInfoPersonal();
  }
  addDatos(DatoPersonal:InfoPersonal)
  {
    
    this.dataService.addInfoPersonal(DatoPersonal);
    this.DatosPersonales=this.dataService.getInfoPersonal();
  }
  delete(dato:InfoPersonal){
    const conf=confirm("Esta seguro que desea eliminar el registro?")
    if(conf)
      this.dataService.removeInfoPersonal(dato);
  }
  openForEdit(dato:InfoPersonal){
    //console .log("entro a editar");
    //console.log(dato);
    //this.datoInfoEdit=dato;
    //var obj = { a: 1 };
    this.datoInfoEdit = Object.assign({}, dato);
    //console.log(copy); // { a: 1 }
    this.nombreusuario="juan Carlos  hhhh";// si pasa
    //console.log("entraaa");
    //console.log(this.datoInfoEdit);
    /*this.datoInfoEdit={
      name:dato.name,
    email:dato.email,
    number:dato.number,
    occupation:dato.occupation,
    phone: dato.phone,
    textarea:dato.textarea
  };*/
    //console.log(this.datoInfoEdit);
   /* this.infoPersonalEdit.emit({
      name: dato.name,
      email: dato.email,
      number: dato.number,
      occupation: dato.occupation,
      phone: dato.phone,
      textarea: dato.textarea
    });*/
  }
  
  
}
