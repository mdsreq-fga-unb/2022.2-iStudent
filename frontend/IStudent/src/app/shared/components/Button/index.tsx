import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import ButtonStyled from './styles';

interface IButton {
  children: string;
  onClick?: Function;
  className?: string;
  id?: string;
}

export const Button = ({ children, onClick, className, id }: IButton) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    if (!onClick) return;

    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  }
  return (
    <ButtonStyled id={id} onClick={handleClick} className={className}>
      {isLoading ? <CircularProgress color="inherit" size={30} /> : children}
    </ButtonStyled>
  );
};
