# 1 Planning

- [Trello](https://trello.com/b/KqnlhBTh/kanban-quadro-modelo)
- [Figma](https://www.figma.com/file/50Nh7t2RpgmlKLskJfMJsf/IStudent?node-id=0%3A1)

### 1.1 Objetivos

Os objetivos para essa sprint são:

- Concluir as User Story que foram deixadas como débito técnico da sprint passada: US12 e US19
- Concluir as User Story da sprint atual: US07, US08, US09, US10, US14 e US15

### 1.2 Tarefas

#### Débito Técnico

**Implementar US12: Prioridade Alta**

- Criar funções para que o Professor possa aceitar ou recusar os pedidos de agendamento recebidos
- Criar função para que aceite ou recuse os pedidos de agendamentos recebidos
- Realizar a integração Frontend e Backend

**Implementar US19: Prioridade Média**

- Criar card de confirmação após o Aluno enviar o pedido de agendamento para o Professor

#### Sprint Atual

**Implementar US07: Prioridade Alta**

- Criar tela com os campos Nome do Curso, Descrição, Duração Total do Curso, Valor do Curso e Categoria do Curso
- Criar controlador responsável para receber a requisição para cadastrar um curso
- Criar rota para cadastrar o curso
- Realizar a integração Frontend e Backend

**Implementar US08: Prioridade Alta**

- Criar tela para visualizar as informações do curso já criado
- Criar função para trazer os dados cadastrados do banco de dados
- Realizar intergração Frontend e Backend

**Implementar US09: Prioridade Alta**

- Criar tela de edição de dados do curso com os campos: Nome do Curso (Não editável), Duração Total do Curso, Valor do Curso e Categoria do Curso
- Crar controlador responsável para receber a requisição dos novos dados para editar o curso
- Criar rota para edição de dados do curso
- Realizar a integração Frontend e Backend

**Implementar US10: Prioridade Média**

- Dentro da tela de visualizar o curso, criar botão de interação para a exclusão do curso
- Criar função responsável para excluir o curso
- Realizar a integração Frontend e Backend

**Implementar US14: Prioridade Alta**

- Criar card dos cursos cadastrados na plataforma para que possa visualizar os seus dados
- Realizar a integração Frontend e Backend

**Implementar US15: Prioridade Alta**

- Ao acessar o curso cadastrado dentro da plataforma, criar o botão de interação para poder se matricular no curso
- Criar controlador responsável pela requisição de matrícula ao curso
- Realizar a integração Frontend e Backend

# 2 Review

**Durante a sprint as User Story que foram concluídas com êxito**:

- [US12] Eu, como Professor quero aceitar ou recusar os pedidos de agendamento dos meus alunos para gerenciar os pedidos de agendamento.
- [US19] Eu, como Aluno quero receber uma resposta do pedido de agendamento de aula por meio do Professor para saber se o meu pedido foi aceito ou não.
- [US07] Eu, como Professor quero cadastrar um ou mais cursos para para que os alunos possam ver e se matricular em meu curso.
- [US08] Eu, como Professor quero visualizar os dados do meu curso para verificar se correspondem com os dados que cadastrei
- [US09] Eu, como Professor quero editar os dados do meu curso para manter meu curso atualizado.
- [US10] Eu, como Professor quero excluir o meu curso após ter sido adicionado para manter meus cursos atualizados.

**User Story que ficaram incompletas**:

- [US14] Eu, como Aluno quero visualizar o que o curso propõe para saber se satisfaz com o que procuro.
- [US15] Eu, como Aluno quero me matricular nos cursos para acessar as aulas que o curso disponibiliza

**Da parte do Cliente**:

Após mostrarmos o que foi entregue durante essa sprint, o Cliente entregou o seu feedback. O mesmo testou as funcionalidades que ficaram no débito técnico e a mais nova funcionalidade do Gerenciamento de Curso, e entregou comentários positivos.

### 2.1 Entregas

- **US12** User Story
- **US19** User Story
- **US07** User Story
- **US08** User Story
- **US09** User Story
- **US10** User Story

### Melhorias

Na sprint passada (Sprint 06) foi identificada um ponto que mais afetou a nossa entrega: dificuldades técnicas na implementação. Ao longo da Sprint 07, focamos em melhorar levando em consideração o seguinte item do nosso Critérios de Replanejamento, do qual deve ocorrer caso:

- Dificuldades sejam encontradas pela Equipe por conta da metodologia abordada.

Nessa sprint tivemos um foco em aprender a integrar o Backend e Frontend, do qual estava sendo algo complicado por conta de só um membro do grupo saber fazer essa atividade. Assim, com o aprendizado do restante da equipe, ficou mais fácil dividir essa tarefa de integração e entregando mais rápido as nossas user story.

Identificamos no fim dessa sprint que por conta de estarmos no fim de semestre e do acúmulo de atividades, não foi possível entregar as duas últimas User Story do backlog da sprint. Assim sendo, ficou como débito técnico para a sprint 07 as seguintes user story:

- **US14** Eu, como Aluno quero visualizar o que o curso propõe para saber se satisfaz com o que procuro.
- **US15** Eu, como Aluno quero me matricular nos cursos para acessar as aulas que o curso disponibiliza
