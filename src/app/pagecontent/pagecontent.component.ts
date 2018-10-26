import { Component, OnInit,EventEmitter,Input,ViewChild} from '@angular/core';
import {InfoPersonal} from "../models/info-personal";
import {DataService} from "../services/data.service";
import { FormAddComponent } from '../form-add/form-add.component';

@Component({

  selector: 'app-pagecontent',
  templateUrl: './pagecontent.component.html',
  styleUrls: ['./pagecontent.component.css']
})
export class PagecontentComponent implements OnInit  {
  @ViewChild("formedit") hijo: FormAddComponent;
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
  updateDatos(DatoPersonal:InfoPersonal)
  {
    
    this.dataService.DatoPersonalUpdate(DatoPersonal);
    this.DatosPersonales=this.dataService.getInfoPersonal();
  }
  delete(dato:InfoPersonal){
    const conf=confirm("Esta seguro que desea eliminar el registro?")
    if(conf)
      this.dataService.removeInfoPersonal(dato);
  }
  openForEdit(dato:InfoPersonal){
    this.hijo.DatosPersonales=dato;
    this.hijo.edit=true;
    //console.log(copy); // { a: 1 }
    this.nombreusuario="juan Carlos  hhhh";// si pasa
    
  }
  
  
}
