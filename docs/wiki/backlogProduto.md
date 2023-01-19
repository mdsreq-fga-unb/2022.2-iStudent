# Histórico de Revisão

| Data       | Versão | Descrição                                          | Autor          |
| ---------- | ------ | -------------------------------------------------- | -------------- |
| 04/12/2022 | 1.0    | Adicionar primeira versão do Backlog               | Wesley Lira    |
| 05/12/2022 | 1.1    | Adicionar os User Story das funcionalidades        | Wesley Lira    |
| 07/12/2022 | 1.2    | Refatorado Épicos 1, 2, 3 e Proposta de MVP        | Cleber Brant   |
| 18/12/2022 | 1.3    | Refatorando os requisitos não funcionais           | Wesley Lira    |
| 18/12/2022 | 1.4    | Corrigindo user story                              | Bruno Henrique |
| 05/01/2023 | 1.5    | Adicionando valor de negócio nas user story        | Wesley Lira    |
| 12/01/2023 | 1.6    | Refatorando valor de negócio do backlog do produto | Cleber Brant   |

# Backlog do Produto

A seguir vai ser apresentado o Backlog do requisito de produto da plataforma iStudent.
O escopo do projeto foi delimitado de acordo com a necessidade de criar uma plataforma interligando o professor autônomo e o aluno de forma remota ou então presencial.

## Épico 1: Área Ambiente

#### Feature 01: Gerenciamento de Usuário

| ID   | User Story                                                                                                                   | Prioridade |
| ---- | ---------------------------------------------------------------------------------------------------------------------------- | ---------- |
| US01 | Eu, como usuário, quero cadastrar os meus dados para conseguir ter acesso a ofertas de cursos disponiveis.                   | Alta       |
| US02 | Eu, como usuário, quero visualizar o meu perfil após o cadastro para verificar se os dados correspondem com o que cadastrei. | Média      |
| US03 | Eu, como usuário, quero editar os dados já cadastrados do meu perfil para deixar meus dados atualizados.                     | Média      |
| US04 | Eu, como usuário, quero excluir a minha conta para não ter mais um perfil.                                                   | Média      |

#### Feature 02: Pareamento dos Usuários

| ID   | User Story                                                                                                                                  | Prioridade |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| US05 | Eu, como usuário, quero visualizar os cursos e professores cadastrados para que eu possa decidir se o curso ou professor tem o que procuro. | Alta       |
| US06 | Eu, como usuário, quero filtrar cursos e professores de acordo com as minhas preferências para acessar os cursos da minha preferência.      | Baixa      |

## Épico 2: Área do Professor

#### Feature 03: Gerenciamento de Curso

| ID   | User Story                                                                                                            | Prioridade |
| ---- | --------------------------------------------------------------------------------------------------------------------- | ---------- |
| US07 | Eu, como Professor, quero cadastrar um ou mais cursos para para que os alunos possam ver e comprar meu curso.         | Alta       |
| US08 | Eu, como Professor, quero visualizar os dados do meu curso para verificar se correspondem com os dados que cadastrei. | Alta       |
| US09 | Eu, como Professor, quero editar os dados do meu curso para manter meu curso atualizado.                              | Alta       |
| US10 | Eu, como Professor, quero excluir o meu curso após ter sido adicionado para manter meus cursos atualizados.           | Média      |

#### Feature 04: Gerenciamento de Agendamento

| ID   | User Story                                                                                                                       | Prioridade |
| ---- | -------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| US11 | Eu, como Professor, quero acessar os pedidos de agendamento dos meus alunos para visualizar o que cada aluno está pedindo.       | Alta       |
| US12 | Eu, como Professor, quero aceitar ou recusar os pedidos de agendamento dos meus alunos para gerenciar os pedidos de agendamento. | Alta       |
| US13 | Eu, como Professor, quero visualizar os pedidos de agendamentos para saber quem requisitou o agendamento de aula.                | Baixa      |

## Épico 3: Área do Aluno

#### Feature 05: Acesso ao Curso

| ID   | User Story                                                                                               | Prioridade |
| ---- | -------------------------------------------------------------------------------------------------------- | ---------- |
| US14 | Eu, como Aluno, quero visualizar o que o curso propõe para saber se satisfaz com o que procuro.          | Alta       |
| US15 | Eu, como Aluno, quero me matricular nos cursos para acessar as aulas que o curso disponibiliza.          | Alta       |
| US16 | Eu, como Aluno, quero me desmatricular do curso em que já estou matriculado para não fazer mais o curso. | Média      |

#### Feature 06: Gerenciamento de Aprendizagem

| ID             | User Story                                                                                                                                                 | Prioridade |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| US17           | Eu, como Aluno, quero acessar a aba de Aprendizagem dentro do meu perfil para visualizar quais são os cursos que eu estou fazendo.                         | Baixa      |
| US18           | Eu, como Aluno, quero visualizar as minhas conquistas ao decorrer do curso para visualizar os desafios que cumpri.                                         | Baixa      |

#### Feature 07: Requisição de Aulas Particulares

| ID   | User Story                                                                                                                                              | Prioridade |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| US19 | Eu, como Aluno, quero requisitar uma Aula Particular com o Professor do curso em que estou matriculado para reforçar o meu aprendizado dentro do curso. | Alta       |
| US20 | Eu, como Aluno, quero receber uma resposta do pedido de agendamento de aula por meio do Professor para saber se o meu pedido foi aceito ou não.         | Média      |

## Requisitos Não Funcionais

| N°    | Requisito                                                                                                                                                |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RNF01 | O Frontend do sistema deve ser desenvolvido com ReactJS e TypeScript.                                                                                    |
| RNF02 | O Backend do sistema deve ser desenvolvido com NodeJS e TypeScript.                                                                                      |
| RNF03 | O banco de dados do sistema deve ser modelado utilizando PostgreSQL.                                                                                     |
| RNF04 | A aplicação deve ser de fácil uso para os usuários, do qual devem ser capazes de realizar suas atividades sem terem que precisar passar por treinamento. |
| RNF05 | O sistema deve ser Web.                                                                                                                                  |
| RNF06 | O sistema deve ter segurança com os dados dos usuários.                                                                                                  |
| RNF07 | O sistema deve ser testável utilizando o Jest.                                                                                                           |
| RNF08 | O tempo de resposta entre a troca de páginas da aplicação não deve passar de 2 segundos.                                                                 |
| RNF09 | A aplicação deve corresponder com 90% de chance de não ocorrer falhas dentro da aplicação enquanto usuários estejam utilizando-a.                        |
| RNF10 | Deve realizar a manutenção da aplicação sempre que for possível                                                                                          |

## Proposta de MVP

#### MVP1:

- Objetivo: Prover ao cliente o Cadastro de Usuário, Pareamento de Usuários, Gerenciamento de Agendamento e a Requisição de Aulas Particulares.

- Features:
  - [F01] - Gerenciamento de Usuário
  - [F02] - Pareamento de Usuários
  - [F04] - Gerenciamento de Agendamento
  - [F07] - Requisição de Aulas Particulares

#### MVP2:

- Objetivo: Prover ao cliente o gerenciamento de usuário, tanto como Professor quanto para Aluno, e a comunicação via Chat na plataforma.

- Features:
  - [F03] - Gerenciamento de Curso
  - [F05] - Acesso ao Curso
  - [F06] - Gerenciamento de Aprendizagem
