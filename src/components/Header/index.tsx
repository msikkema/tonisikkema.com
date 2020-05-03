import React, { FunctionComponent } from 'react';
import { HeaderLinkProps, HeaderProps } from './Header.types';
import {
  HeaderLinkContainer,
  Link,
  SelectedArrow,
  SHeader,
  HeaderContainer,
  SLink,
  Star,
  LinksContainer
} from './Header.styles';

const HeaderLink: FunctionComponent<HeaderLinkProps> = ({ text, selected }) => (
  <HeaderLinkContainer>
    <Link selected={selected === text}>
      {text}
    </Link>
    {selected === text && <SelectedArrow />}
  </HeaderLinkContainer>
);

const Header: FunctionComponent<HeaderProps> = ({ selected }) => (
  <SHeader>
    <HeaderContainer>
      <SLink to="/">
        <Star>&#9733;</Star> Toni Sikkema <Star>&#9733;</Star>
      </SLink>
    </HeaderContainer>

    <LinksContainer>
      {['ABOUT', 'RESEARCH', 'VOLUNTEERING', 'CONTACT'].map(link => (
        <HeaderLink key={link} text={link} selected={selected}/>
      ))}
    </LinksContainer>
  </SHeader>
);

export default Header;
