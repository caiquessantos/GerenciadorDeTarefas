import { Routes } from '@angular/router';
import { ListarTarefasComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

export const TarefaRoutes: Routes = [
  /**
   * Caso seja informado 'tarefas' ou 'tarefas/listar' como caminho, será redirecionado para o CadastrarTarefaComponent.
   */
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar',
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefasComponent,
  },
  /**
   * Caso seja informado 'tarefas/cadastrar' como caminho, será redirecionado para o ListarTarefaComponent.
   */
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent,
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent,
  },
];
