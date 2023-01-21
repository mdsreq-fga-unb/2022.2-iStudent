import { CircularProgress } from '@mui/material';

import {Container} from './styles'

export const Loading = () => {
  return (
    <Container>
      <CircularProgress color="inherit" size={30}/>
    </Container>
  )
}