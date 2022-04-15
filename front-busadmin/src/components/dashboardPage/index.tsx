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
  const token = getAuthTokenUser();
  useEffect(() => {
    console.log(!token)
    if (!getAuthTokenUser()) {
      navigate('/');
    }
  }, []);

  return (
    <Container>
      {/* <HeaderUser /> */}
      <Menu />
      <SubContainer>
        <Header>
          <h2>{title}</h2>
          <div className='container-search'>
            <input type="text" className='input-search' />
          </div>
        </Header>
        {children}
      </SubContainer>
    </Container>
  )
}