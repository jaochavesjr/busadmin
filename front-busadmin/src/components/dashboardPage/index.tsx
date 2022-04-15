import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
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
          <div className='container-search'>
            <input type="text" className='input-search' />
            <div className='container-icon-search'>
              <img src='/icons/search.svg' alt='icone pesquisa' />
            </div>
          </div>
          <div className='profile'>
            <p>Fulano da Silva</p>
          </div>
        </Header>
        <h2>{title}</h2>
        {children}
      </SubContainer>
    </Container>
  )
}