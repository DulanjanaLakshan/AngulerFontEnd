import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/Super-hero';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  private url = 'SuperHero';

  constructor(private http:HttpClient) {}

  public getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }
}
