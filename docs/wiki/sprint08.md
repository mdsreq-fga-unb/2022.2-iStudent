# 1 Planning

- [Trello](https://trello.com/b/KqnlhBTh/kanban-quadro-modelo)
- [Figma](https://www.figma.com/file/50Nh7t2RpgmlKLskJfMJsf/IStudent?node-id=0%3A1)

### 1.1 Objetivos

Os objetivos para essa sprint são:

- Concluir as User Story que foram deixadas como débito técnico da sprint passada: US14 e US15
- Concluir as User Story da sprint atual: US16 e US17

### 1.2 Tarefas

#### Débito Técnico

**Implementar US14: Prioridade Alta**

- Criar card dos cursos cadastrados na plataforma para que possa visualizar os seus dados
- Realizar a integração Frontend e Backend

**Implementar US15: Prioridade Alta**

- Ao acessar o curso cadastrado dentro da plataforma, criar o botão de interação para poder se matricular no curso
- Criar controlador responsável pela requisição de matrícula ao curso
- Realizar a integração Frontend e Backend

#### Sprint Atual

**Implementar US16: Prioridade Média**

- Acessar ao curso em que o Aluno/Professor se matriculou, trazer os documentos e vídeos presentes na plataforma.
- Criar controlador responsável para upload de arquivos e vídeos
- Criar endpoint para essa funcionalidade
- Realizar a integração Frontend e Backend

**Implementar US17: Prioridade Baixa**

- Aluno/Professor que clicar em desmatricular, remover a matrícula do usuário do banco de dados e do "Meus Cursos"
- Criar endpoint para essa funcionalidade
- Realizar a integração Frontend e Backend

# 2 Review

**Durante a sprint as User Story qye foram concluídas com êxito**:

- [US14] Eu, como Aluno quero visualizar o que o curso propõe para saber se satisfaz com o que procuro.
- [US15] Eu, como Aluno quero me matricular nos cursos para acessar as aulas que o curso disponibiliza
- [US17] Eu, como Aluno, quero me desmatricular do curso em que já estou matriculado para não fazer mais o curso.

**User Story que ficaram incompletas**:

- [US16] Eu, como Aluno, quero visualizar os conteúdos do curso que me matriculei para que eu possa iniciar a minha aprendizagem.

**Da parte do Cliente**:

O Cliente ficou satisfeito com a entrega do MVP2 mesmo com a US16 não podendo ter sido completa. O mesmo Cliente deu o feedback positivo após testar a plataforma com as User Story do MVP2 entregue e gostou do que foi entregue.

### 2.1 Entregas

- **US14** User Story
- **US15** User Story
- **US17** User Story

### Melhorias

Durante essa sprint, a nossa equipe identificou problemas que foram cruciais para que a nossa entrega do MVP2 não fosse completa 100%. Esses problemas foram:

- Deslize nos refinamentos das User Story: esse deslize levou a gente a colocar no backlog as user story da **Funcionalidade 06 - Gerenciamento de Aprendizagem** sendo que a **US17** era critério de aceitação dentro da **US15**. Por conta disso a Funcionalidade 06 acabou tendo só uma user story, que no fim concordamos em adicioná-la na **Funcionalide 05 - Acesso ao Curso** como **US16: Eu, como Aluno, quero visualizar os conteúdos do curso que me matriculei para que eu possa iniciar a minha aprendizagem.**.
- Deslize no conhecimento técnico da equipe: esse problema é parecido com o mesmo da Sprint 06, entretanto esse foi por conta que não levamos em conta se os membros da equipe tinham algum conhecimento ou experiência em criar controladores e funções dentro do Backend para que possa fazer upload de arquivos e vídeos dentro da plataforma.

Por conta do segundo problema citado acima, não foi possível entregar todas as user story planejadas para a Sprint 08. A User Story que não possível ser completada foi:

- **US16**: Eu, como Aluno, quero visualizar os conteúdos do curso que me matriculei para que eu possa iniciar a minha aprendizagem.
