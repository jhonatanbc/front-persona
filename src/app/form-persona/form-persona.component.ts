import { Component, OnInit, inject } from '@angular/core';
import { Persona } from '../services/model/personaSave.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonaService } from '../services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-persona',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-persona.component.html',
  styleUrl: './form-persona.component.css',
  providers:[PersonaService]
})
export class FormPersonaComponent implements OnInit{
  formGroup!: FormGroup;
  private _personaService = inject(PersonaService)
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  persona? : Persona;

  private response:any;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this._personaService.getById(id)
      .subscribe(persona => {
        this.persona = persona;
        this.formGroup = this.formBuilder.group({
          nombres:[persona.nombres,[Validators.required]],
          apellidoPaterno:[persona.apellidoPaterno,[Validators.required]],
          apellidoMaterno:[persona.apellidoPaterno,[Validators.required]],
          edad:[persona.edad,[Validators.required]]
        })
        console.log('persona', persona)
      })
    }else{
      this.formGroup = this.formBuilder.group({
        nombres:['',[Validators.required]],
        apellidoPaterno:['',[Validators.required]],
        apellidoMaterno:['',[Validators.required]],
        edad:['',[Validators.required]]
      })
    }
    
    

    console.log(id,'id')

    
  }

  onSubmit(): any {
    const id = this.route.snapshot.paramMap.get('id');  
    if(this.persona){
      this.edit(id, this.formGroup.value);
    }else{
      this.post(this.formGroup.value);
    }
  }

  post(body:any){
    this._personaService.post(body)
      .subscribe(() => {
        this.router.navigate(['/persona']);
    });
  };

  edit(id:any, body:any){
    this._personaService.edit(id, body)
      .subscribe(() => {
        this.router.navigate(['/persona']);
    });
  };
}