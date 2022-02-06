import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  Nav,
  ContainerLink,
} from  './styles';

import { links } from '../links';
import { ReactNode } from 'react';

interface IPropLink {
  link: string;
  children: ReactNode;
}

const NavLink = ({ children, link }: IPropLink) => {
  return (
    <ContainerLink>
      <Link to={`/dashboard/${link}`}>
        {children}
      </Link>
    </ContainerLink>
  );
}

export const Menu = () => {
  return (
    <Container>
      <Header>
        <h1>Bus Admin</h1>
      </Header>
      <Nav>
        {links.map(({ icon, href, label }, index) => (
          <NavLink key={index} link={href} >
            <img src={icon.src} alt={icon.alt} style={{ minWidth: icon.width, maxWidth: icon.width, minHeight: icon.height, maxHeight: icon.height }} />
            {label}
          </NavLink>
        ))}
      </Nav>
    </Container>
  );
};