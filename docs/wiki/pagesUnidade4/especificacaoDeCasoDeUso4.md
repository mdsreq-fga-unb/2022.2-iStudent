## Especificação de Caso de Uso: Configurar Perfil

#### Histórico de Revisão

| Data       | Versão | Descrição                          | Autor       |
| ---------- | ------ | ---------------------------------- | ----------- |
| 31/01/2023 | 0.1    | Criação do Documento               | Bruno Henrique |


#### **1. Breve Descrição**

Este caso de uso é utilizado pelos usuarios para poderem adicionar ou alterar informações sobre eles mesmos com o objetivo de edição e visualização dos dados basícos e caso o usuario seja professor, terá a opção de registrar ou alterar a materia que dá aula.

##### **1.1 Atores**

- Aluno
- Professor

#### **2. Fluxo Básico de Eventos**

Este caso de uso é iniciado quando o usuário entra na seção de "Editar Dados".

##### 2.1 O sistema apresenta dois inputs, com placeholders dos dados já existentes, para preencher novos dados.

##### 2.2 O Usuario preenche novos dados nos inputs, nome e email.

##### 2.3 O Usuario clica em "Salvar".

##### 2.4 O Sistema valida os novos dados.

##### 2.5 O Sistema apresenta a mensagem de sucesso.

##### 2.6 O caso de uso é encerrado.

#### **3. Fluxos Alternativos**

Este caso de uso é iniciado quando o usuário entra na seção de "Editar Dados" e o usuário é do tipo professor.

###### 3.1.1 O sistema apresenta tres inputs, com placeholders dos dados já existentes, para preencher novos dados.

###### 3.1.2 O Usuario preenche input de matéria.

###### 3.1.3 O Usuario clica em "Salvar".

###### 3.1.4 O Sistema valida os novos a materia.

###### 3.1.5 O Sistema apresenta a mensagem de sucesso.

###### 3.1.6 Caso de uso encerrado

#### **4. Fluxos de Exceção**

##### 4.1 Este caso de uso é iniciado quando o usuário entra na seção de "Editar Dados".

##### 4.2 O sistema apresenta tres inputs, com placeholders dos dados já existentes, para preencher novos dados.

##### 4.3 O Usuario preenche inputs, nome e email.

##### 4.4 O Usuario clica em "Salvar".

##### 4.5 O Sistema valida email e nome.

##### 4.6 O Sistema verifica que email é invalido pois já existe outro no sistema.

##### 4.7 O Sitema apresenta a mensagem de erro é apresentada.

##### 4.8 Caso de uso encerrado.

#### **6. Pré-Condições**

Usuário deve está logado.

#### **7. Pós-Condições**

Aluno/Professor conseguirão editar os dados de seu perfil.

#### **8. Pontos de Extensão**

Não se aplica.

#### **9. Requisitos Especiais**

##### 9.1 Acesso Web

Deve ser acessível via web em dispositivos móveis ou desktops.
