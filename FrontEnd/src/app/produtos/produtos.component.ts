import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'produtos',
  templateUrl: 'produtos.component.html',
})
export class ProdutosComponent implements OnInit {

  produtos : any[] =[ {"ID" :1, "Nome": "Solid State Drive","Categoria":100,"Quantidade":50},
    {
    "ID" : 2,
    "Nome": "Monitor",
    "Categoria":101,
    "Quantidade":20
    },
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
