import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../store/hooks';
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
  
  const { userToken } = useAppSelector((state) => state.auth);
  
  useEffect(() => {
      document.title = `${title} - Bus Admin`;
  }, []);

  useEffect(() => {
    if (!userToken) navigate('/');
  }, []);

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