import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Aula } from '../models/Aula-models.model';
@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {
@Input() aula: Aula;
@HostBinding('class') cssClass = 'col-md-4';


  constructor() { }

  ngOnInit(): void {
  }

}
