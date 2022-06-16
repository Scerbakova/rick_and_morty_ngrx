import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterApiRespone } from '../interface/character'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  getCharacters(page = 1): Observable<CharacterApiRespone> {
    return this.http.get<CharacterApiRespone>(`${environment.baseUrlAPI}/?page=${page}`);
  }
}


