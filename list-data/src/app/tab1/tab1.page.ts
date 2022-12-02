import { Component } from '@angular/core';
import { PersonasService } from '../api/personas.service';
import { Personas } from '../models/personas';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  
  ListPersonas:Personas[] = []

  constructor(public personasServices:PersonasService) {
    this.cargarPersonas();
  }

  public cargarPersonas():void
  {
    this.personasServices.getPersonas().subscribe(
      (response)=>{        
        this.ListPersonas = response
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

}
