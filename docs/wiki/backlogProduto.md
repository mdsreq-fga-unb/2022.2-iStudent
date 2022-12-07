# Histórico de Revisão

| Data       | Versão | Descrição                                   | Autor       |
| ---------- | ------ | ------------------------------------------- | ----------- |
| 04/12/2022 | 1.0    | Adicionar primeira versão do Backlog        | Wesley Lira |
| 05/12/2022 | 1.1    | Adicionar os User Story das funcionalidades | Wesley Lira |

# Backlog do Produto

A seguir vai ser apresentado o Backlog do requisito de produto da plataforma iStudent.
O escopo do projeto foi delimitado de acordo com a necessidade de criar uma plataforma interligando o professor autônomo e o aluno de forma remota ou então presencial.

## Épico 1: Área Ambiente
#### Feature 01: Gerenciamento de Usuário

| ID                        | User Story                                                                                                                                           | Prioridade |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| F01US01  | Eu, como usuário, gostaria de poder cadastrar os meus dados dentro da plataforma. | Alta       |
| F01US02 | Eu, como usuário, gostaria de, dentro do cadastro, poder especificar se sou Aluno ou Professor. | Alta      |
| F01US03 | Eu, como usuário, gostaria de poder visualizar o meu perfil após o cadastro. | Média       |
| F01US04 | Eu, como usuário, gostaria de poder editar os dados já cadastrados do meu perfil dentro da plataforma. | Média       |
| F01US05 | Eu, como usuário, gostaria de poder excluir a minha conta dentro da plataforma. | Média      |

#### Feature 02: Pareamento dos Usuários

| ID                        | User Story                                                                                                                                           | Prioridade |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| F02US01  | Eu, como usuário, gostaria de, após cadastrado, poder visualizar os cursos e professores da plataforma já cadastrados. | Alta       |
| F02US02 | Eu, como usuário, gostaria de, após cadastrado, poder visualizar cursos e professores de acordo com as minhas preferências. | Média      |

#### Feature 03: Autenticação

| ID                        | User Story                                                                                                                                           | Prioridade |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| F03US01  | Eu, como usuário, gostaria de poder me autenticar na plataforma via conta do Google. | Baixa       |
| F03US02 | Eu, como usuário, gostaria de poder me autenticar na plataforma via conta do Facebook. | Baixa      |
| F03US03 | Eu, como usuário, gostaria de poder me autenticar na plataforma via conta da Apple. | Baixa       |

## Épico 2: Área do Professor
#### Feature 04: Gerenciamento de Curso

| ID                        | User Story                                                                                                                                           | Prioridade |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| F04US01  | Eu, como Professor, gostaria de poder cadastrar um ou mais cursos dentro da plataforma. | Alta       |
| F04US02 | Eu, como Professor, gostaria de poder visualizar os dados do meu curso dentro da plataforma. | Alta      |
| F04US03 | Eu, como Professor, gostaria de poder editar os dados do me curso dentro da plataforma. | Alta       |
| F04US04 | Eu, como Professor, gostaria de poder visualizar os alunos matriculados no(s) meu(s) curso(s). | Média       |
| F04US05 | Eu, como Professor, gostaria de poder excluir o meu curso após ele ter sido adicionado dentro da plataforma. | Média      |

#### Feature 05: Gerenciamento de Agendamento

| ID                        | User Story                                                                                                                                           | Prioridade |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| F05US01  | Eu, como Professor, gostaria de poder acessar os pedidos de agendamento dos meus alunos dentro da plataforma. | Alta       |
| F05US02 | Eu, como Professor, gostaria de poder aceitar ou recusar os pedidos de agendamento dos meus alunos dentro da plataforma. | Alta      |
| F05US03 | Eu, como Professor, gostaria de poder visualizar o aluno que requisitou o pedido de agendamento dentro da plataforma. | Baixa       |

## Épico 3: Área do Aluno
#### Feature 06: Acesso ao Curso

| ID                        | User Story                                                                                                                                           | Prioridade |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| F06US01  | Eu, como Aluno, gostaria de poder visualizar o que os cursos propõe dentro da plataforma. | Alta       |
| F06US02 | Eu, como Aluno, gostaria de poder me matricular nos cursos dentro da plataforma. | Alta      |
| F06US03 | Eu, como Aluno, gostaria de, após matriculado, visualizar o conteúdo do curso e os seus materiais de aprendizagem. | Alta       |
| F06US04 | Eu, como Aluno, gostaria de poder me desmatricular do curso em que já estou matriculado. | Média       |

#### Feature 07: Gerenciamento de Aprendizagem

| ID                        | User Story                                                                                                                                           | Prioridade |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| F07US01  | Eu, como Aluno, gostaria de poder acessar a aba de Aprendizagem dentro do meu perfil. | Baixa       |
| F07US02 | Eu, como Aluno, gostaria de poder visualizar a porcentagem do andamento do curso em que estou matriculado. | Baixa      |
| F07US03 | Eu, como Aluno, gostaria de poder visualizar as minhas conquistas ao decorrer do curso dentro da plataforma. | Baixa       |
| F07US04 | Eu, como Aluno, gostaria de poder visualizar os meus certificados ganhos após a finalização dos cursos. | Baixa       |

#### Feature 08: Requisição de Aulas Particulares

| ID                        | User Story                                                                                                                                           | Prioridade |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| F08US01  | Eu, como Aluno, gostaria de poder requisitar uma Aula Particular com o Professor do curso em que estou matriculado. | Alta       |
| F08US02 | Eu, como Aluno, gostaria de poder especificar, dentro da requisição da aula, se a aula pode ser via Remoto ou Presencial. | Alta      |
| F08US03 | Eu, como Aluno, gostaria de poder especificar o dia e horário da requisição da aula particular com professor. | Alta       |
| F08US04 | Eu, como Aluno, gostaria de poder receber uma resposta do pedido de agendamento de aula por meio do Professor dentro da plataforma. | Média       |

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
