import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import {
  Container,
  Header,
  Nav,
} from  './styles';

import { links } from './links';
import { ReactNode } from 'react';

interface IPropLink {
  link: string;
  children: ReactNode;
}

export const Menu = () => {
  const location = useLocation();
  const url = location.pathname.split('/')[location.pathname.split('/').length - 1];
  
  return (
    <Container>
      <Header>
        <h1>Bus Admin</h1>
      </Header>
      <Nav>
        {links.map(({ icon, href, label }, index) => (
          <Link key={index} to={`/dashboard/${href}`} className={cn({
            ['linkActive']: url === href,
          })}>
              <img src={icon.src} alt={icon.alt} style={{ minWidth: icon.width, maxWidth: icon.width, minHeight: icon.height, maxHeight: icon.height }} />
              {label}
          </Link>
        ))}
      </Nav>
    </Container>
  );
};
