import { Component, OnInit } from '@angular/core';
import { MedicallService } from '../services/medicall.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

  constructor(private medicSvc: MedicallService) { }

  citas = []

  ngOnInit(): void {
    this.medicSvc.obtenerCitas().subscribe(res => {
      this.citas = res as any
      this.citas = this.citas.slice(1, 6)
    })
  }

}
