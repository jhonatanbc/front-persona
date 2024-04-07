import { Routes } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { FormPersonaComponent } from './form-persona/form-persona.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path : 'persona', component : PersonaComponent},
    {path : 'form-persona', component : FormPersonaComponent},
    {path : 'edit/:id', component : FormPersonaComponent},
    {path : '', component : LoginComponent},
];
