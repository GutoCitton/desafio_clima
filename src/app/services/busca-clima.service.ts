import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { BuscaClima } from './busca-clima.types';

@Injectable({
  providedIn: 'root',
})
export class BuscaClimaService {
  private API_ID = '45f8d6a48ac2279c8954243037bb47b8';
  private baseURL = 'https://api.openweathermap.org';

  constructor(private http: HttpClient) { }

  buscaClima(cidade: string): Observable<BuscaClima> {
    return this.http.get<{lat: number, lon: number}[]>(
      `${this.baseURL}/geo/1.0/direct?q=${cidade}&limit=1&appid=${this.API_ID}`
    ).pipe(switchMap(([{ lat, lon }]) => this.http.get<BuscaClima>(`${this.baseURL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_ID}`)))
  }
}
