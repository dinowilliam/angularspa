import { Component, OnInit } from '@angular/core';

import { Dinossauro } from 'src/app/model/dinossauro.model';

@Component({
  selector: 'spa-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  titulo = "Página Demo";

  valor = 0;

  constructor() { }

  exibeTabela: boolean = false;
  exibePanel: boolean = false;

  listaDinossauro: Dinossauro[] = [
    { nome: 'Mamenchisaurus', tamanho: 27, especie: 'Mamenchisaurus Constructus', infraOrdem: 'Sauropodes' },
    { nome: 'Tiranossauro', tamanho: 25, especie: 'Tyranosaurus Rex', infraOrdem: 'Theropoda' },
    { nome: 'Paquicelafossauro', tamanho: 4, especie: 'Troodon Wyomingensis', infraOrdem: 'Ornithischia' },
    { nome: 'Iguanodon', tamanho: 7, especie: 'Iguanodon Bernissartensis', infraOrdem: 'Ornithopoda' }
  ];

  displayedColumns: string[] = ['nome', 'tamanho', 'especie', 'infraOrdem'];

  ngOnInit(): void {

  }

  exibirTabela() {
    this.exibeTabela = true;
    this.exibePanel = false;
  }

  exibirPanel() {
    this.exibeTabela = false;
    this.exibePanel = true;
  }

  adicionaValor() {
    this.valor++;
  }

  subtraiValor() {
    if (this.valor > 0) {
      this.valor--;
    }
  }

}
