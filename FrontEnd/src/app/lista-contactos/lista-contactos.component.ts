import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista-contactos',
  templateUrl: 'lista-contactos.component.html',
  styles: ['h1 {font-weight: normal;}']
})
export class ListaContactosComponent implements OnInit {

  contactos = [
    {id:1, name: 'Paul', email: 'p_ackman@cmu.co.uk'},
    {id:2, name: 'Sam', email: 's_smith@customElements.co.uk'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
