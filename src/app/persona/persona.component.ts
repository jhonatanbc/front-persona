import { Component, OnInit, inject } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { CommonModule } from '@angular/common';
import { PersonaResponse } from '../services/model/Persona';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
  providers:[PersonaService]
})
export class PersonaComponent implements OnInit{
  private _personaService = inject(PersonaService)
  personas:PersonaResponse[] = [];

  ngOnInit(): void {
    this._personaService.get().subscribe((data) => this.personas = data);
  }
}


