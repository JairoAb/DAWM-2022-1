import { Component, OnInit } from '@angular/core';
import { MedicallService } from '../services/medicall.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(private medicSvc: MedicallService) {}
  
  citas = []

  ngOnInit(): void {
    this.medicSvc.obtenerTitulos().subscribe(res => {
      if(this.citas.length < 6)
        this.citas = res as any
    })
  }


}
