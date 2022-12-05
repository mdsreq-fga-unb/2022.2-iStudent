# Histórico de Revisão

| Data       | Versão | Descrição                            | Autor       |
| ---------- | ------ | ------------------------------------ | ----------- |
| 04/12/2022 | 1.0    | Adicionar primeira versão do Backlog | Wesley Lira |

# Backlog do Produto

A seguir vai ser apresentado o Backlog do requisito de produto da plataforma iStudent.
O escopo do projeto foi delimitado de acordo com a necessidade de criar uma plataforma interligando o professor autônomo e o aluno de forma remota ou então presencial.

## Épico 1: Área Ambiente

| Feature                        | User Story | Prioridade |
| ------------------------------ | ---------- | ---------- |
| [F01] - Cadastro de Usuário    |            | Alta       |
| [F02] - Visualização de Perfil |            | Média      |
| [FO3] - Edição de Perfil       |            | Alta       |
| [F04] - Pareamento de Usuários |            | Alta       |
| [F05] - Autenticação           |            | Média      |
| [F06] - Comunicação via Chat   |            | Baixa      |

## Épico 2: Área do Professor

| Feature                              | User Story | Prioridade |
| ------------------------------------ | ---------- | ---------- |
| [F07] - Gerenciamento de Turma       |            | Alta       |
| [F08] - Cadastro de Curso            |            | Alta       |
| [F09] - Edição de Dados (Curso)      |            | Médio      |
| [F10] - Gerenciamento de Agendamento |            | Alta       |

## Épico 3: Área do Aluno

| Feature                                  | User Story | Prioridade |
| ---------------------------------------- | ---------- | ---------- |
| [F11] - Matricular no Curso              |            | Alta       |
| [F12] - Visualização de Curso            |            | Médio      |
| [F13] - Gerenciamento de Aprendizagem    |            | Baixo      |
| [F14] - Requisição de Aulas Particulares |            | Alta       |

## Requisitos Não Funcionais

| N°    | Requisito                                                                                                                                                          |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RNF01 | O Frontend do sistema deve ser desenvolvido com ReactJS e TypeScript                                                                                               |
| RNF02 | O Backend do sistema deve ser desenvolvido com NodeJS e TypeScript                                                                                                 |
| RNF03 | O banco de dados do sistema deve ser modelado utilizando PostgreSQL                                                                                                |
| RNF04 | O sistema deve ter uma enorme adaptabilidade para os usuários, do qual devem ser capazes de realizar suas atividades sem terem que precisar passar por treinamento |
| RNF05 | O sistema deve ser Web                                                                                                                                             |
| RNF06 | O sistema deve ter segurança com os dados dos usuários                                                                                                             |
| RNF07 | O sistema deve ser testável                                                                                                                                        |

## Proposta de MPV

### MVP1:

- Objetivos: Prover ao cliente o Cadastro de Usuário, Pareamento de Usuários, Gerenciamento de Agendamento e a Requisição de Aulas Particulares

- Features:
  - [F01] - Cadastro de Usuário
  - [F02] - Pareamento de Usuários
  - [F10] - Gerenciamento de Agendamento
  - [F14] - Requisição de Aulas Particulares

### MVP2:

- Objetivos: Prover ao cliente o gerenciamento de usuário, tanto como Professor quanto para Aluno, e a comunicação via Chat na plataforma

- Features:
  - [F03] - Edição de Perfil
  - [F04] - Visualização de Perfil
  - [F05] - Autenticação
  - [F06] - Comunicação via Chat
  - [F07] - Gerenciamento de Turmas
  - [F08] - Cadastro de Curso
  - [F09] - Edição de Dados (Curso)
  - [F11] - Matricular no Curso
  - [F12] - Visualização de Cursos
  - [F13] - Gerenciamento de Aprendizagem
