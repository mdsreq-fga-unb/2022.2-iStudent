## Especificação de Caso de Uso: Gerenciamento de Usuário

#### Histórico de Revisão

| Data       | Versão | Descrição                          | Autor       |
| ---------- | ------ | ---------------------------------- | ----------- |
| 30/01/2023 | 0.1    | Criação do Documento               | Lucas Caldas |
| 31/01/2023 | 0.2    | Adicionando informações adicionais | Lucas Caldas |

#### **1. Breve Descrição**

Esse caso de uso permite que o Aluno possa solicitar uma aula com algum professor cadastrado na plataforma e acessar essa aula caso o professor aceite. Além disso, também permite ao professor disponibilizar a sua aula para alunos que os alunos possam solicitar.

##### **1.1 Atores**

- Aluno
- Professor

#### **2. Fluxo Básico de Eventos**

Este caso de uso é iniciado quando o Professor disponibiliza sua aula particular na plataforma e assim, o aluno consegue visualizá-lo e solicitar uma aula.

##### 2.1.1 O sistema apresenta as seguintes opções

- Visualizar professores disponíveis [A1]
- Solicitar aula [A2]
- Escolher aula remota/presencial e o dia da aula [A3]
- Enviar solicitação [A4]
- Receber notificação de confirmação [A5]


##### 2.1.2 O Professor se cadastra na plataforma como Professor.

##### 2.1.3 O sistema deixa esse professor disponível na área de agendamento.

##### 2.1.4 O Aluno acessa a área de agendamento e vê os professores disponíveis.

##### 2.1.5 O Aluno solicita a aula com o professor que desejar.

##### 2.1.6 O sistema envia essa solicitação ao professor escolhido.

##### 2.1.7 O Professor, ao receber a solicitação, aceita a aula.

##### 2.1.8 O Aluno é notificado e recebe acesso a aula.

##### 2.1.9 O caso de uso é encerrado.

#### **3. Fluxos Alternativos**

##### 3.1 [A1] Visualizar professores disponíveis

###### 3.1.1 O Professor cadastra-se na plataforma como professor.

###### 3.1.2 O sistema disponibiliza o professor na área de professores disponíveis.

###### 3.1.3 O aluno consegue visualizar o professor na área de professores disponíveis.

###### 3.1.4 O caso de uso é encerrado.

##### 3.2 [A2] Solicitar Aula

###### 3.2.1 O Aluno escolhe o professor com o qual deseja ter aula clicando no botão de solicitar aula.

###### 3.2.2 O caso de uso é encerrado.

##### 3.3 [A3] Escolher aula remota/presencial e o dia

###### 3.3.1 O sistema disponibiliza uma aba para escolher a opção que o aluno deseja (remota ou presencial) e o dia e horário no qual a aula será dada.

###### 3.3.6 O caso de uso é encerrado.

##### 3.4 [A4] Enviar solicitação

###### 3.4.1 O sistema envia a solicitação de aula para o professor escolhido assim que o aluno termina a solicitação.

###### 3.4.2 O caso de uso é encerrado.

##### 3.5 [A5] Receber notificação de confirmação

###### 3.5.1 O sistema notifica o aluno caso o professor aceite ao recuse sua solicitação de aula.

###### 3.5.2 O caso de uso é encerrado.

#### **4. Fluxos de Exceção**

##### FE1 – Não escolha do dia e horário da aula

Nos passo 3.3.1 o sistema verifica se o aluno selecionou as opção necessárias para o agendamento, caso o aluno não escolha o dia e horário exato da aula, a solicitação não pode ser enviado ao professor.

##### FE2 – Exclusão de solicitação

No passo 3.4.1 o Professor recebe a solicitação e pode aceitar ou recusar. Caso recuse, a aula não é disponibilizada e o aluno é notificado.

#### **6. Pré-Condições**

O Professor e Aluno devem estar cadastrados na plataforma e o Aluno ter realizado login para executar as solicitações.

#### **7. Pós-Condições**

O Aluno conseguirá fazer uma solitação de Agendamento e o Professor conseguirá aceitar ou não a solicitação.

#### **8. Pontos de Extensão**

Não se aplica.

#### **9. Requisitos Especiais**

##### 9.1 Acesso Web

Para esse caso de uso deve ser acessível tanto via web..

#### **10. Informações Adicionais**

Não é necessário.
