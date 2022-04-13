import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../store/hooks';
import { getAuthTokenUser } from '../../utils/localStorage';
import { Menu } from './menu';
import {
  Container,
  Header,
  SubContainer,
} from './styles';

interface IProps {
  title: string;
  children: ReactNode;
}

export const DashboardPage = ({ title = 'Admin', children }: IProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getAuthTokenUser()) {
      navigate('/');
    }
  });

  return (
    <Container>
      <Menu />
      <SubContainer>
        <Header>
          {title}
        </Header>
        {children}
      </SubContainer>
    </Container>
  )
}