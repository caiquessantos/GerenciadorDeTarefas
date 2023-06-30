import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  constructor() {}

  /**
   * Faz a listagem de todas as tarefas retornando-as em JSON caso existam tarefas no local storagem e caso não exista, o retorno será uma string vazia.
   */
  Listar(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /**
   * Faz o cadastro de uma tarefa criando o id dela a partir da quantidade de segundos exatas.
   * Coloca a nova tarefa criada no final da string tarefas e faz com que o localStorage receba a nova string de tarefas.
   */
  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.Listar();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
  /**
   *
   * @param id É o id da tarefa que deverá ser encontrada.
   * @returns Retorna um valor do tipo Tarefa.
   * Faz a busca e acordo com o id passado e usa o 'find' para achar a tarefa na lista total que tenha o mesmo id que o informado.
   */
  buscaId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.Listar();
    return tarefas.find((tarefa) => tarefa.id === id);
  }
  /**
   *
   * @param tarefa é a tarefa que será atuializada.
   * Utiliza o forEach para iterar todas as tarefas e se o id da tarefa que está sendo iterada for igual ao id da tarefa que deve ser atualizada a função faz que a tarefa
   * antiga seja substituída pela nova transformando 'tarefas' de JSON para string e alocando no localStorage.
   */
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.Listar();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
  /**
   *
   * @param id O id da tarefa que será removida.
   * Utiliza o filter para retornar à variável 'tarefas' tudo que seja 'true' na condição imposta, filtrando assim a variável.
   * Transforma de JSON para string e aloca no localStorage.
   */
  remover(id: number): void {
    let tarefas: Tarefa[] = this.Listar();
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
  /**
   *
   * @param id O id a tarefa que terá o status alterado.
   * Utiliza o forEach para iterar todas as tarefas e se o id da tarefa que está sendo iterada for igual ao id da tarefa que deverá ter o status atualizado a função faz que o
   * status antigo seja substituído pelo novo, transformando 'tarefas' de JSON para string e alocando no localStorage.
   */
  mudarStatus(id: number): void {
    const tarefas: Tarefa[] = this.Listar();
    tarefas.forEach((obj, index, objs) => {
      if (obj.id === id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
