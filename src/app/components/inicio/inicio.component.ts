import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: '../../views/inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
