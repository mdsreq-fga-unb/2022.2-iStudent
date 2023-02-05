## Especificação de Caso de Uso: Gerenciamento de Usuário

#### Histórico de Revisão

| Data       | Versão | Descrição                          | Autor       |
| ---------- | ------ | ---------------------------------- | ----------- |
| 29/01/2023 | 0.1    | Criação do Documento               | Wesley Lira |
| 31/01/2023 | 0.2    | Adicionando informações adicionais | Wesley Lira |

#### **1. Breve Descrição**

Esse caso de uso permite que o Aluno e o Professor possam criar uma conta dentro do sistema. Além disso, ambos após criar uma conta vão poder visualizar os dados do seu perfil, editar os dados do perfil e, caso queiram, ter a opção de excluir a própria conta da plataforma.

##### **1.1 Atores**

- Aluno
- Professor

#### **2. Fluxo Básico de Eventos**

Este caso de uso é iniciado quando o Professr/Aluno escolha e opção entre Aluno ou Professor

##### 2.1.1 O sistema apresenta as seguintes opções

- Criar Conta
- Visualizar Perfil [A1]
- Editar dados da conta [A2]
- Excluir conta [A3]

##### 2.1.2 O Aluno/Professor seleciona para criar uma conta

##### 2.1.3 O sistema apresentar as informações a serem preenchidas para a criação de uma conta.

##### 2.1.4 O Aluno/Professor preenche as informações e solicita para criar uma nova conta.

##### 2.1.5 O sistema faz a validação para as informações preenchidas.

##### 2.1.6 O sistema apresenta a mensagem de conta criada com sucesso.

##### 2.1.7 O caso de uso é encerrado.

#### **3. Fluxos Alternativos**

##### 3.1 [A1] Visualizar Perfil

###### 3.1.1 O Professor/Aluno escolhe acessar o perfil.

###### 3.1.2 O sistema apresenta os mesmos dados que o Professor/Aluno utilizou para se cadastrar no sistema.

##### 3.2 [A2] Editar dados da conta

###### 3.2.1 O Professor/Aluno após acessar o seu perfil, seleciona a opção de editar os dados da conta

###### 3.2.2 O sistema apresenta os dados da conta

- Nome completo, Email (não liberado para edição), Biografia e Senha

###### 3.2.3 O Professor/Aluno realiza as atualizações necessárias.

###### 3.2.4 O sistema valida os novos dados preenchidos.

###### 3.2.5 O Professor/Aluno seleciona a opção de confirmar a edição de dados.

###### 3.2.6 O sistema exibe a mensagem de que a edição de perfil foi realizada com sucesso.

###### 3.2.7 O caso de uso é encerrado

##### 3.3 [A3] Excluir conta

###### 3.3.1 O Professor/Aluno após acessar o seu perfil, seleciona a opção de excluir a sua conta.

###### 3.3.2 O sistema exibe a mensagem perguntando se o usuário realmente deseja excluir a conta.

###### 3.3.3 O Professor/Aluno confirma a exclusão da conta.

###### 3.3.4 O sistema informa uma mensagem dizendo que a conta foi excluída com sucesso.

###### 3.3.5 O sistema volta com o usuário para a Home da página onde possa se logar ou criar uma nova conta.

###### 3.3.6 O caso de uso é encerrado.

#### **4. Fluxos de Exceção**

##### FE1 - Validação de informações

Nos passos 2.1.5 e 3.2.4 o sistema verifica se uma ou mais informações não foram validadas, de acordo com o formato ou a obrigatoriedade, e exibe uma mensagem informando ao Professor/Aluno. O sistema retorna ao passo 2.1.3 ou 3.2.2 conforme o local de onde foi chamado.

##### FE2 - Atualizações não Confirmadas

No passo 3.2.5 o Professor/Aluno não confirma a edição dos dados. O sistema retorna para 3.2.2 conforme o local que foi chamado.

##### FE3 - Exclusão de conta não confirmada

No passo 3.3.2 o Professor/Aluno não confirma a exclusão da conta. O sistema retorna para 3.3.1 conforme o local que foi chamado.

#### **5. Pré-Condições**

Não é necessário.

#### **6. Pós-Condições**

##### 6.1 Login

Para utilizar este caso de uso das funcionalidades 3.1, 3.2 e 3.3 é necessário que o Professor/Aluno esteja “logado” na aplicação.

#### **7. Pontos de Extensão**

Não se aplica.

#### **8. Requisitos Especiais**

##### 8.1 Acesso Web

Para esse caso de uso deve ser acessível tanto via web..

#### **9. Informações Adicionais**

Não é necessário.
