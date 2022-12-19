# Histórico de Revisão

| Data       | Versão | Descrição                                   | Autor        |
| ---------- | ------ | ------------------------------------------- | ------------ |
| 04/12/2022 | 1.0    | Adicionar primeira versão do Backlog        | Wesley Lira  |
| 05/12/2022 | 1.1    | Adicionar os User Story das funcionalidades | Wesley Lira  |
| 07/12/2022 | 1.2    | Refatorado Épicos 1, 2, 3 e Proposta de MVP | Cleber Brant |
| 18/12/2022 | 1.3    | Refatorando os requisitos não funcionais    | Wesley Lira  |
| 18/12/2022 | 1.4    | Corrigindo user story    | Bruno Henrique  |

# Backlog do Produto

A seguir vai ser apresentado o Backlog do requisito de produto da plataforma iStudent.
O escopo do projeto foi delimitado de acordo com a necessidade de criar uma plataforma interligando o professor autônomo e o aluno de forma remota ou então presencial.

## Épico 1: Área Ambiente

#### Feature 01: Gerenciamento de Usuário

| ID      | User Story                                                                                             | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| F01US01 | Eu, como usuário, quero cadastrar os meus dados para poder usar a plataforma.                      | Alta       |
| F01US02 | Eu, como usuário, quero, dentro do cadastro, especificar se sou Aluno ou Professor.        | Alta       |
| F01US03 | Eu, como usuário, quero visualizar o meu perfil após o cadastro.                           | Média      |
| F01US04 | Eu, como usuário, quero editar os dados já cadastrados do meu perfil. | Média      |
| F01US05 | Eu, como usuário, quero excluir a minha conta.                        | Média      |

#### Feature 02: Pareamento dos Usuários

| ID      | User Story                                                                                                                  | Prioridade |
| ------- | --------------------------------------------------------------------------------------------------------------------------- | ---------- |
| F02US01 | Eu, como usuário, quero visualizar os cursos e professores da plataforma já cadastrados.      | Alta       |
| F02US02 | Eu, como usuário, quero visualizar cursos e professores de acordo com as minhas preferências. | Média      |

#### Feature 03: Autenticação

| ID      | User Story                                                                             | Prioridade |
| ------- | -------------------------------------------------------------------------------------- | ---------- |
| F03US01 | Eu, como usuário, quero me autenticar na plataforma.   | Média      |

## Épico 2: Área do Professor

#### Feature 04: Gerenciamento de Curso

| ID      | User Story                                                                                                   | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------------------ | ---------- |
| F04US01 | Eu, como Professor, quero cadastrar um ou mais cursos.                      | Alta       |
| F04US02 | Eu, como Professor, quero visualizar os dados do meu curso.                 | Alta       |
| F04US03 | Eu, como Professor, quero editar os dados do me curso.                      | Alta       |
| F04US04 | Eu, como Professor, quero visualizar os alunos matriculados no(s) meu(s) curso(s).               | Média      |
| F04US05 | Eu, como Professor, quero excluir o meu curso após ele ter sido adicionado. | Média      |

#### Feature 05: Gerenciamento de Agendamento

| ID      | User Story                                                                                                               | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------------------------------ | ---------- |
| F05US01 | Eu, como Professor, quero acessar os pedidos de agendamento dos meus alunos.            | Alta       |
| F05US02 | Eu, como Professor, quero aceitar ou recusar os pedidos de agendamento dos meus alunos. | Alta       |
| F05US03 | Eu, como Professor, quero visualizar o aluno que requisitou o pedido de agendamento.    | Baixa      |

## Épico 3: Área do Aluno

#### Feature 06: Acesso ao Curso

| ID      | User Story                                                                                                         | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------------------------ | ---------- |
| F06US01 | Eu, como Aluno, quero visualizar o que o curso propõe dentro da plataforma.                          | Alta       |
| F06US02 | Eu, como Aluno, quero me matricular nos cursos dentro da plataforma.                                   | Alta       |
| F06US03 | Eu, como Aluno, quero visualizar o conteúdo do curso. | Alta       |
| F06US04 | Eu, como Aluno, quero me desmatricular do curso em que já estou matriculado.                           | Média      |

#### Feature 07: Gerenciamento de Aprendizagem

| ID      | User Story                                                                                                   | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------------------ | ---------- |
| F07US01 | Eu, como Aluno, quero acessar a aba de Aprendizagem dentro do meu perfil.                        | Baixa      |
| F07US02 | Eu, como Aluno, quero visualizar a porcentagem do andamento do curso em que estou matriculado.   | Baixa      |
| F07US03 | Eu, como Aluno, quero visualizar as minhas conquistas ao decorrer do curso dentro da plataforma. | Baixa      |
| F07US04 | Eu, como Aluno, quero visualizar os meus certificados ganhos após a finalização dos cursos.      | Baixa      |

#### Feature 08: Requisição de Aulas Particulares

| ID      | User Story                                                                                                                          | Prioridade |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| F08US01 | Eu, como Aluno, quero requisitar uma Aula Particular com o Professor do curso em que estou matriculado.                 | Alta       |
| F08US02 | Eu, como Aluno, quero especificar, dentro da requisição da aula, a modalidade da aula.          | Alta       |
| F08US03 | Eu, como Aluno, quero especificar o dia e horário da requisição da aula particular com professor.                       | Alta       |
| F08US04 | Eu, como Aluno, quero receber uma resposta do pedido de agendamento de aula por meio do Professor dentro da plataforma. | Média      |

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
  - [F05] - Gerenciamento de Agendamento
  - [F08] - Requisição de Aulas Particulares

#### MVP2:

- Objetivo: Prover ao cliente o gerenciamento de usuário, tanto como Professor quanto para Aluno, e a comunicação via Chat na plataforma.

- Features:
  - [F03] - Autenticação
  - [F04] - Gerenciamento de Curso
  - [F06] - Acesso ao Curso
  - [F07] - Gerenciamento de Aprendizagem
