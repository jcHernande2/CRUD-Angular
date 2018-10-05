import { Component, OnInit ,EventEmitter,Output,Input} from '@angular/core';
import {InfoPersonal} from '../models/info-personal';
import {DataService} from  '../services/data.service';
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  DatosPersonales : InfoPersonal={
    name:"",
    email:"",
    number:0,
    occupation:"",
    phone:"",
    textarea:""
  };
  @Output() DatoPersonalAdded =new EventEmitter<InfoPersonal>();
 /* name:string;
  email:string;*/
  @Input() infoPersonalEdit: InfoPersonal[];
  @Input() Nombre:string;
  @Input() Email:string;
  constructor() { }
  ngOnInit() {
  }
  onSubmit() { 
    this.DatoPersonalAdded.emit({
      name: this.DatosPersonales.name,
      email: this.DatosPersonales.email,
      number: this.DatosPersonales.number,
      occupation: this.DatosPersonales.occupation,
      phone: this.DatosPersonales.phone,
      textarea: this.DatosPersonales.textarea
    });
    this.DatosPersonales.name="";
     this.DatosPersonales.email="";
      this.DatosPersonales.number=0;
      this.DatosPersonales.occupation="";
      this.DatosPersonales.phone="";
      this.DatosPersonales.textarea="";
  // alert("entra");
    // console.log(this.DatosPersonales.name,this.DatosPersonales.email)
    //alert("entra");
    /*if (this.) {
      console.log("Form Submitted!");
      this.myform.reset();
    }*/
  }
  backen(){
    
  }
}
