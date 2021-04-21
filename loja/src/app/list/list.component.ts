import { Component, OnInit } from '@angular/core';
import { Estoque } from './list.models';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
produtos: Estoque[]
  constructor(private estoqueServise:ListService) {
    this.produtos = estoqueServise.getEstoque();
   }

  ngOnInit(): void {
  }

}
