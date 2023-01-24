import { HeaderHome, HeaderUser } from '../../shared/components'
import {Container, Body} from './styles';
import { useUser } from "../../contexts/User";

export const AboutUs = () => {
  const { user } = useUser();

  return (
    <Container>
      {user ? <HeaderUser /> : <HeaderHome /> }
      <Body>
        <h3 className='text1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cumque enim repudiandae dolor! Nostrum dolorem incidunt, et tempora in, modi quisquam doloremque officia illo reprehenderit quod quam consectetur nesciunt beatae!</h3>
        <h3 className='text1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum obcaecati nobis reiciendis voluptatum aliquid sint quibusdam nulla quaerat ipsum odio, repellendus recusandae et quam quos eveniet deleniti, dolor delectus.</h3>
        <h3 className='text2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum obcaecati nobis reiciendis voluptatum aliquid sint quibusdam nulla quaerat ipsum odio, repellendus recusandae et quam quos eveniet deleniti, dolor delectus.</h3>
      </Body>
    </Container>
  )
}