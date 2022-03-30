import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PetsInterface } from "../types/pets.interface";

@Injectable()

export class PetsService {

  constructor(private http: HttpClient) { }
  getPets(): Observable<PetsInterface[]>{
    return this.http.get<PetsInterface[]>('http://localhost:3000/pets')
  }
}