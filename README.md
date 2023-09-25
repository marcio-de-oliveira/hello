## Executando o Projeto To-Do List

Este projeto é uma aplicação de lista de tarefas que permite criar, editar, excluir e gerenciar tarefas com as seguintes informações: título, descrição, ID único (armazenado no 'localStorage'), categoria e prioridade(alta, média, baixa). A aplicação possui duas tabelas separadas para listar tarefas novas e tarefas concluídas.

### Passos para Execução

1. Clone o repositório do projeto para a sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/to-do-list.git
   ```

2. Navegue para o diretório do projeto:

   ```bash
   cd to-do-list
   ```

3. Abra o arquivo `index.html` em um navegador da web ou hospede-o em um servidor web local (por exemplo, usando o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no Visual Studio Code).

4. A aplicação To-Do List será carregada no seu navegador.

### Uso da Aplicação

Agora que a aplicação está em execução, você pode usar o To-Do List para gerenciar suas tarefas da seguinte forma:

- Para criar um novo card, preencha os campos necessários, incluindo título, descrição, categoria e prioridade. Um ID único será gerado e armazenado no `localStorage`.

- Para editar um card, clique no botão "Editar" no card desejado e faça as alterações necessárias,após finalizar click em salvar.

- Para excluir um card, clique no icone "Excluir" no card desejado. O card será removido da lista.

- Para marcar uma tarefa como concluída, clique no icone "Concluir" no card correspondente. O card será movido para a lista de tarefas concluídas.

- Abaixo do formulária é possivel visualizar as tarefas concluídas e não concluidas.
