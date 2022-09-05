import { Component, OnInit } from '@angular/core';
import { MedicallService } from '../services/medicall.service';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

  constructor(private medicSvc: MedicallService) { }
  medicos = []

  ngOnInit(): void {
    this.medicSvc.obtenerMedicos(10).subscribe(res => {
      this.medicos = res as any
    })
  }

  buscarMedicos(){
    let hola = document.querySelector('.hola') as any
    this.medicSvc.obtenerMedicosByTitulo(hola.value).subscribe(res => {
      this.medicos = res as any
    })
  }

}
