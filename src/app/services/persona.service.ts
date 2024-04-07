import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit, inject } from "@angular/core";
import { PersonaResponse } from "./model/Persona";

@Injectable()
export class PersonaService{
    private url = "http://localhost:8080/api-persona";
    _httpClient = inject(HttpClient);



    public result:any;

    constructor(){
    }

    get(){
        return this._httpClient.get<PersonaResponse[]>(this.url+"/list-all");
    }

    getById(id:String){
        return this._httpClient.get<PersonaResponse>(this.url+"/list/"+id);
    }
    delete(id:String){
        return this._httpClient.delete(this.url+"/delete/"+id);
    }

    post(body:any){
        return this._httpClient.post(this.url+"/save",body)
    }

    edit( id:any, body:any){
        console.log("URL:   ",this.url+"/edit/"+id , body);
        return this._httpClient.put(this.url+"/edit/"+id , body)
    }

}

