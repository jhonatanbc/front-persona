import { Component, OnInit, inject } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { CommonModule } from '@angular/common';
import { PersonaResponse, PersonaSave } from '../services/model/Persona';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
  providers:[PersonaService]
})
export class PersonaComponent implements OnInit{
  private _personaService = inject(PersonaService)
  private response:any;
  personas:PersonaResponse[] = [];

  ngOnInit(): void {
    this.get();
  }

  get(){
    this._personaService.get()
      .subscribe(data => {
        this.personas = data}
      );
  }

  delete(id:any){
    this._personaService.delete(id)
      .subscribe(() => {
        this.get()
      })
  }
}
