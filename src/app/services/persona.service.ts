import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit, inject } from "@angular/core";
import { PersonaResponse } from "./model/Persona";

@Injectable()
export class PersonaService{
    private url = "http://localhost:8080/api-persona/list-all";
    _httpClient = inject(HttpClient);



    public result:any;

    constructor(){
    }

    get(){
        return this._httpClient.get<PersonaResponse[]>(this.url);
    }

}

