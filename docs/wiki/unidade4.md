# User Story MVP2

## MVP2

### Feature 03 - Gerenciamento de Curso

#### US07 - Eu, como Professor quero cadastrar um ou mais cursos para para que os alunos possam ver e se matricular em meu curso. 
-   O usuário como Professor deve poder conseguir se cadastrar na plataforma.
-   Todos os campos de inserção de dados da página deve passar por validação para saber se os dados foram inseridos ou não.
-   Só deve ser possível realizar o cadastro do curso caso todos os campos tenham sido preenchidos. 

#### US08 - Eu, como Professor quero visualizar os dados do meu curso para verificar se correspondem com os dados que cadastrei
-   Só deve ser possível visualizar os dados do curso caso o Professor já tenha um curso cadastrado.
-   Os dados devem corresponder com os mesmos dados que o Professor inseriu para cadastrar o curso.
-   Caso tenha, o Professor pode visualizar os alunos que estão matriculados em seu curso. 

#### US09 - Eu, como Professor quero editar os dados do meu curso para manter meu curso atualizado.
-   Todos os dados inseridos podem ser editados somente pelo Professor que cadastrou o curso.
-   Todos os dados que foram inseridos durante o cadastro do Curso podem ser editados pelo Professor.
-   Os novos dados inseridos devem ser válidos.

#### US10 - Eu, como Professor quero excluir o meu curso após ter sido adicionado para manter meus cursos atualizados.
-   Ao apertar o botão para excluir o curso, o Professor deve confirmar novamente para conseguir excluir o curso.
-   O Professor precisa ter um curso cadastrado para que possa ser excluído.
-   Caso o Professor tenha alunos matriculados em seu curso, ao excluir o curso todos os alunos serão desmatriculados e receberão uma notificação informando o motivo.


### Feature 05 - Acesso ao Curso

#### US14 - Eu, como Aluno quero visualizar o que o curso propõe para saber se satisfaz com o que procuro. 
-   Ao clicar no card do curso na página Home, deve abrir um novo card com todas as informações do que o curso propõe.

#### US15 - Eu, como Aluno quero me matricular nos cursos para acessar as aulas que o curso disponibiliza
-   O Aluno só deve poder conseguir se matricular em um curso caso tenha se cadastrado como Aluno.
-   O curso deve existir dentro da plataforma para que o Aluno possa conseguir se matricular.
-   O aluno deve poder visualizar as informações que o curso propõe para a aprendizagem do Aluno. 
-   Ao clicar em se matricular, o curso selecionado deve aparecer dentro da aba de “Meus Cursos”. 
-   Após matriculado no curso, o Aluno pode visualizar todo o conteúdo e os materiais que o curso disponibiliza.

#### US16 - Eu como Aluno, gostaria de poder me desmatricular do curso em que já estou matriculado.
-   Ao clicar no botão para se desmatricular no curso, deve aparecer um segundo card para o Aluno confirmar aa desmatricula.
-   O Aluno precisa já estar matriculado no curso para conseguir se desmatricular depois.
-   Ao se desmatricular, o curso deve desaparecer da aba de “Meus Cursos”.
-   O Aluno deve receber uma notificação informando que foi concluído a desmatrícula do curso.


### Feature 06 - Gerenciamento de Aprendizagem

#### US17 - Eu, como Aluno, quero acessar a aba de Aprendizagem dentro do meu perfil para visualizar quais são os cursos que eu estou fazendo.
-   Para poder acessar a aba de Aprendizagem, o usuário deve ter se cadastrado como Aluno.
-   Ao acessar a aba de Aprendizagem, o Aluno vai poder visualizar as informações da porcentagem de andamento dos cursos em que está matriculado.

#### US18 - Eu, como Aluno quero visualizar as minhas conquistas ao decorrer do curso para visualizar os desafios que cumpri.
-   O Aluno deve conseguir visualizar as conquistas que ele ganhou enquanto acessava os vídeos e as atividades dentro do curso. 
-   Só deve ser possível visualizar as conquistas dentro do curso caso o Aluno esteja matriculado no curso.
-   Caso tenha concluído todo o curso, o Aluno vai receber uma notificação de conclusão do curso e vai poder visualizar o certificado de conclusão.