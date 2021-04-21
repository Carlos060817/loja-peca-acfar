import { Component, OnInit } from '@angular/core';
import { ListService } from '../list/list.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit  {

  

  constructor(private listEstoque : ListService) {
   
   }

  ngOnInit(): void {
  }

  onSubmit(form:any){
  let id : number 
  let cod : number 
  let nome : string = ''
  let entrada : number 
  let saida : number 
  let qtde : number 

  id = form.value.id
  cod = form.value.cod
  nome = form.value.nome
  entrada = form.value.entrada
  saida = form.value.saida
  qtde = form.value.qtde

  this.listEstoque.addProduto(id,cod,nome,entrada,saida,qtde)

  }

}
