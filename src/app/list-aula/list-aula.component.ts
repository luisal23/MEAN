import { Component, OnInit } from '@angular/core';
import { Aula } from '../models/Aula-models.model';

@Component({
  selector: 'app-list-aula',
  templateUrl: './list-aula.component.html',
  styleUrls: ['./list-aula.component.css']
})
export class ListAulaComponent implements OnInit {
  ailas: Aula[];

  constructor() {
    this.ailas = []
   }
  ngOnInit(): void {
  }
  guardar(nombre: string, aula: string): boolean {
    this.ailas.push(new Aula(nombre, aula));
    return false;
     }
}
