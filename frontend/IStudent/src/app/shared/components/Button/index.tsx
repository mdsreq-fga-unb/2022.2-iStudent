import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import ButtonStyled from './styles';

interface IButton {
  children: string;
  onClick?: Function;
}

export const Button = ({ children, onClick }: IButton) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    if (!onClick) return;

    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  }
  return (
    <ButtonStyled onClick={handleClick}>
      {isLoading ? <CircularProgress color="inherit" size={30} /> : children}
    </ButtonStyled>
  );
};
