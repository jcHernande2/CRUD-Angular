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
  public datoInfoEdit:InfoPersonal;
  //@Input() public infoPersonalEdit: InfoPersonal;
  //@Input() infoPersonalEdit =new EventEmitter<InfoPersonal>()
  constructor(public dataService:DataService) { 
    

  }

  ngOnInit() {
    this.DatosPersonales=this.dataService.getInfoPersonal();
  }
  addDatos(DatoPersonal:InfoPersonal)
  {
    
    this.dataService.addInfoPersonal(DatoPersonal);
  }
  openForEdit(dato:InfoPersonal){
    //console.log(dato);
    this.datoInfoEdit=dato;
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
