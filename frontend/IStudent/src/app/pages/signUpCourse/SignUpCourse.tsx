import { HeaderUser, Button } from '../../shared/components'
import {Container, FirstBody, SecondBody} from './styles'
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";


export const SignUpCourse = () => {
  return (
    <Container>
      <HeaderUser />
      <div className='columns-space'>
        <FirstBody>
          <div className="my-data-title">
            <h1>Seus Dados</h1>
          </div>
          <div className="my-data">
            <div className="complete-name">
              <p>Nome Completo</p>
              <input type="text" name="name" />
            </div>
            <div className="email">
              <p>E-mail</p>
              <input type="email" name="email" />
            </div>
            <div className="bio">
              <p>Biografia</p>
              <textarea name="biography" />
            </div>
          </div>
          <div className="my-material-title">
            <h1>Escolha uma Senha</h1>
          </div>
          <div className="my-material">
            <div className="material">
              <p>Sua nova senha</p>
              <input type="password" name="password" />
            </div>
            <div className="value-hour">
              <p>Confirme sua nova senha</p>
              <input
                type="password"
                name="confirmationPassword"
              />
            </div>
          </div>
          <div className="final">
            <div className="alert-area">
              <ErrorOutlineIcon style={{ color: "#000080" }} />
              <div className="alert-text">
                <p>Importante!</p>
                <p>Preencha todas as informações</p>
              </div>
            </div>
            <Button>Salvar Cadastro</Button>
          </div>
        </FirstBody>
        <SecondBody>
        <div className="my-data-title">
            <h1>Seus Dados</h1>
          </div>
          <div className="my-data">
            <div className="complete-name">
              <p>Nome Completo</p>
              <input type="text" name="name" />
            </div>
            <div className="email">
              <p>E-mail</p>
              <input type="email" name="email" />
            </div>
            <div className="bio">
              <p>Biografia</p>
              <textarea name="biography" />
            </div>
          </div>
          <div className="my-material-title">
            <h1>Escolha uma Senha</h1>
          </div>
          <div className="my-material">
            <div className="material">
              <p>Sua nova senha</p>
              <input type="password" name="password" />
            </div>
            <div className="value-hour">
              <p>Confirme sua nova senha</p>
              <input
                type="password"
                name="confirmationPassword"
              />
            </div>
          </div>
          <div className="final">
            <div className="alert-area">
              <ErrorOutlineIcon style={{ color: "#000080" }} />
              <div className="alert-text">
                <p>Importante!</p>
                <p>Preencha todas as informações</p>
              </div>
            </div>
            <Button>Salvar Cadastro</Button>
          </div>
        </SecondBody>
      </div>
    </Container>
  )
}