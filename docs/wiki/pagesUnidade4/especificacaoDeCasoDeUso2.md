## Especificação de Caso de Uso: Gerenciamento de Curso

#### Histórico de Revisão

| Data       | Versão | Descrição                          | Autor       |
| ---------- | ------ | ---------------------------------- | ----------- |
| 31/01/2023 | 0.1    | Criação do Documento               | Cleber Brant |


#### **1. Breve Descrição**

O Gerenciamento de Curso permite que o Professor consiga criar seu curso, adicionar materiais extra classe, editar as informações e arquivos adicionados, remover informações e arquivos adicionados e excluir o curso da plataforma.

##### **1.1 Atores**

- Professor

#### **2. Fluxo Básico de Eventos**

O Gerenciamento de Curso é iniciado quando um Professor decide criar ou gerenciar um curso.

##### 2.1 O sistema apresenta as seguintes opções

- Criar Curso
- Editar informações do Curso [A1]
- Excluir Curso [A2]
- Adicionar material extra classe [A3]
- Editar material extra classe [A4]
- Remover material extra classe [A5]


##### 2.2 O Professor seleciona que deseja criar um curso.

##### 2.3 O Sistema apresenta as informações que devem ser preenchidas para criação de um curso.

##### 2.4 O Professor preenche as informações necessárias e solicita a criação do curso.

##### 2.5 O Sistema faz a validação das informações preenchidas.

##### 2.6 O Sistema apresenta a mensagem de Curso criado com sucesso.

##### 2.7 O caso de uso é encerrado.

#### **3. Fluxos Alternativos**

##### 3.1 [A1] Editar informações do Curso

###### 3.1.1 O Professor escolhe editar as informações do Curso.

###### 3.1.2 O Sistema apresenta os dados cadastrados. (Nome do Curso,  Descrição do Curso, Tipo de Curso).

###### 3.1.3 O Sistema permite a edição dos dados apresentados nos campos.

###### 3.1.4 O Professor altera as informações que desejar.

###### 3.1.5 O Professor confirma os novos dados preenchidos.

###### 3.1.6 O Sistema faz a validação para as informações preenchidas.

###### 3.1.7 O Sistema exibe a mensagem que a edição foi realizada com sucesso.

###### 3.1.8 O caso de uso é encerrado.

##### 3.2 [A2] Excluir Curso

###### 3.2.1 O Professor escolhe excluir o Curso da plataforma.

###### 3.2.2 O Sistema exibe uma mensagem perguntando se o Professor realmente deseja excluir o Curso.

###### 3.2.3 O Professor confirma a exclusão do Curso.

###### 3.2.4 O Sistema exibe uma mensagem confirmando a exclusão do Curso.

###### 3.2.5 O caso de uso é encerrado.

##### 3.3 [A3] Adicionar material extra classe

###### 3.3.1 O Professor escolhe adicionar material extra classe.

###### 3.3.2 O Sistema exibe o campo onde podem ser adicionados textos e arquivos.

###### 3.3.3 O Professor escreve ou envia o arquivo extra classe.

###### 3.3.4 O Sistema processa o arquivo para saber se o tipo é válido. (MP4, RAR, PDF, DOCX).

###### 3.3.5 O Sistema exibe o texto escrito ou o arquivo recebido.

###### 3.3.6 O Professor confirma o envio do material.

###### 3.3.7 O Sistema exibe uma mensagem confirmando a adição do material.

###### 3.3.8 O caso de uso é encerrado.

##### 3.4 [A4] Editar material extra classe

###### 3.4.1 O Professor escolhe editar material extra classe.

###### 3.4.2 O Sistema exibe o campo onde podem ser alterados textos e arquivos.

###### 3.4.3 O Professor escreve ou envia o novo texto ou arquivo extra classe.

###### 3.4.4 O Sistema processa o arquivo para saber se o tipo é válido. (MP4, RAR, PDF, DOCX).

###### 3.4.5 O Sistema exibe o texto escrito ou o arquivo recebido.

###### 3.4.6 O Professor confirma o envio do material.

###### 3.4.7 O Sistema exibe uma mensagem confirmando a edição do material.

###### 3.4.8 O caso de uso é encerrado.

##### 3.5 [A5] Excluir material extra classe

###### 3.5.1 O Professor escolhe excluir material extra classe.

###### 3.5.2 O Sistema exibe o campo onde podem ser excluídos textos e arquivos.

###### 3.5.3 O Professor seleciona o arquivo extra classe que será excluído.

###### 3.5.4 O Professor confirma a exclusão do material.

###### 3.5.5 O Sistema exibe uma mensagem confirmando a exclusão do material.

###### 3.5.6 O caso de uso é encerrado.

#### **4. Fluxos de Exceção**

##### 4.1 FE1 - Validação de informações

Nos passos 2.5, 3.1.6, 3.3.4, 3.4.4  o Sistema verifica se uma ou mais informações não foram validadas, de acordo com o formato ou a obrigatoriedade, e exibe uma mensagem informando ao Professor. O Sistema retorna ao passo 2.4, 3.1.5, 3.3.3 e 3.4.3 respectivamente conforme o local de onde foi chamado.

##### 4.2 FE2 - Atualizações não Confirmadas

Nos passos 3.1.5, 3.4.6 o Professor não confirma a edição dos dados. O sistema retorna para 3.1.4 e 3.4.5 respectivamente conforme o local que foi chamado.

##### 4.3 FE3 - Exclusão de conta não confirmada

Nos passos 3.2.3, 3.5.4 o Professor não confirma as exclusões. O sistema retorna para 3.2.2 e 3.5.3 respectivamente conforme o local que foi chamado.

#### **5. Pré-Condições**

Ter uma conta do tipo Professor.

#### **6. Pós-Condições**

O curso estará disponível.

#### **7. Pontos de Extensão**

Não se aplica.

#### **8. Requisitos Especiais**

##### 8.1 Acesso Web

Deve ser acessível via web em dispositivos móveis ou desktops.

#### **9. Informações Adicionais**

Caso o Professor já tenha um curso, ele não necessariamente precisa criar outro curso para gerenciar.
