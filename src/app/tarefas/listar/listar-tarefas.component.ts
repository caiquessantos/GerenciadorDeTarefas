import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css'],
})
export class ListarTarefasComponent implements OnInit {
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}
  /**
   * Inicia o componente.
   */
  ngOnInit(): void {
    this.tarefas = this.ListarTarefas();
  }

  /**
   *
   * @returns retorna a chamada da função 'listar' presente em 'tarefaservice'.
   *
   */
  ListarTarefas(): Tarefa[] {
    return this.tarefaService.Listar();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover ' + tarefa.nome + '?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.ListarTarefas();
    }
  }
  mudarstatus(tarefa: Tarefa): void {
    this.tarefaService.mudarStatus(tarefa.id);
    this.tarefas = this.ListarTarefas();
  }
}
