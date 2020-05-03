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

const pages = [
  {
    page: 'ABOUT',
    link: '/'
  },
  {
    page: 'RESEARCH',
    link: '/research'
  },
  {
    page: 'VOLUNTEERING',
    link: '/volunteering'
  },
  {
    page: 'CONTACT',
    link: '/contact'
  },
];

const HeaderLink: FunctionComponent<HeaderLinkProps> = ({
  text,
  selected,
  link
}) => (
  <HeaderLinkContainer>
    <Link fade duration={0.3} selected={selected === text} to={link}>
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
      {pages.map(({ page, link }) => (
        <HeaderLink key={page} text={page} link={link} selected={selected}/>
      ))}
    </LinksContainer>
  </SHeader>
);

export default Header;
