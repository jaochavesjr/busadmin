import { ReactNode, useEffect } from 'react';
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
  useEffect(() => {
      document.title = `${title} - Bus Admin`;
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