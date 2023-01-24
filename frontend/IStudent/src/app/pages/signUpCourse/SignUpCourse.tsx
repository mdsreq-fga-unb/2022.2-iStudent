import { HeaderUser, Button } from '../../shared/components'
import {Container, FirstBody, SecondBody} from './styles'
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";


export const SignUpCourse = () => {
  return (
    <Container>
      <HeaderUser />
      <div className='columns-space'>
        <FirstBody>
          <div className="course-title">
            <h1>Cadastrar Curso</h1>
          </div>
          <div className="course-basic-info">
            <div className="course-name">
              <p>Nome do curso</p>
              <input type="text" name="name" />
            </div>
            <div className="course-description">
              <p>Descrição</p>
              <textarea />
            </div>
          </div>
          <div className="constructor-title">
            <h1>Construtor do Curso</h1>
          </div>
          <div className="constructor-area">
            <div className="add-module-area">
              <span>Adicione um módulo para montar seu curso</span>
              <button>Adicionar Módulo</button>
              <div className='module-area'>
                <span>Nome do Módulo</span>
                <input type="text" />
                <div className='add-module'>
                  <button>Adicionar</button>
                </div>
              </div>
              <div className='existing-modules'>
                <div>
                  <ul>
                    <li>
                      <div>
                        <p>Modulo 1</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p>Modulo 2</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p>Modulo 3</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>  
          <div className="additional-data-title">
            <h1>Dados Adicionais</h1>
          </div>
          <div className="course-duration-area">
            <span>Duração total do curso</span>
            <div>
              <input type="number" placeholder='HH'/>
              <input type="number" placeholder='MM'/>
              <input type="number" placeholder='SS'/>
            </div>
          </div>
          <div className='benefits-area'>
            <span>Benefícios do Curso</span>
            <textarea placeholder='Liste um por linha'/>
          </div>
          <div className='requests-area'>
            <span>Requisitos/Instruções</span>
            <textarea placeholder='Liste um por linha'/>
          </div>
        </FirstBody>
        <SecondBody>
          <div className='publish'>
            <button className='delete-button'>Excluir</button>
            <button className='publish-button'>Publicar</button>
          </div>
          <div className='categories'>
            <input type="text" placeholder='Digite a categoria'/>
            <button>Adicionar</button>
            <div className='categories-add'>Lista com as categorias</div>
          </div>
          <div className='course-image-area'>
            <span>Imagem Destaque</span>
            <input type="file" />
          </div>
        </SecondBody>
      </div>
    </Container>
  )
}