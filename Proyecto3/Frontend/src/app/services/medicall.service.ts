import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicallService {

  constructor(private http: HttpClient) { }

  obtenerTitulos() {
    return this.http.get('http://localhost:3000/titulos')
  }

  obtenerTitulo(id: Number) {
    return this.http.get(`http://localhost:3000/titulos/${id}`)
  }

  obtenerCitas(){
    return this.http.get(`https://proyecto3-dawm-default-rtdb.firebaseio.com/citas.json`)
  }

  obtenerMedicos(id: Number){
    return this.http.get(`http://localhost:3000/medicos/count/${id}`)
  }

  obtenerMedicosByTitulo(id: Number){
    return this.http.get(`http://localhost:3000/medicos/${id}`)
  }
}
