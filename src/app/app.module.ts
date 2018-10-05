import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { HeaderComponent } from './header/header.component';
//import { HomeComponent } from './home/home.component';
//import { UtilidadesModule } from './utilidades/utilidades.module';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { TopnavigationComponent } from './topnavigation/topnavigation.component';
import { PagecontentComponent } from './pagecontent/pagecontent.component';
import { FootercontentComponent } from './footercontent/footercontent.component';
import { FormAddComponent } from './form-add/form-add.component';
import { FormsModule } from '@angular/forms';
import{DataService} from "./services/data.service"
/*
  HeaderComponent,
    HomeComponent,
--import
 UtilidadesModule,
    */

@NgModule({
  declarations: [
    AppComponent,
  
    LeftmenuComponent,
    TopnavigationComponent,
    PagecontentComponent,
    FootercontentComponent,
    FormAddComponent
  ],
  imports: [
    BrowserModule,
   
    FormsModule
   
  ],
  providers: [DataService],
  bootstrap: [AppComponent,LeftmenuComponent,TopnavigationComponent,PagecontentComponent,FootercontentComponent]
})
export class AppModule { }
