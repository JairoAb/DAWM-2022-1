import { Component, OnInit } from '@angular/core';
import { MedicallService } from '../services/medicall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  medicos = []
  titulos = []
  constructor(private medicSvc: MedicallService) {}

  ngOnInit(): void {
    this.medicSvc.obtenerMedicos(2).subscribe(res => {
      this.medicos = res as any
    })

    this.medicSvc.obtenerTitulos().subscribe(res => {
      this.titulos = res as any
    })
  }
}
