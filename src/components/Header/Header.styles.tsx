import { Link as GLink } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import { primary } from '../../styles/palette';
import { deadcentre, mq } from '../../styles/positions';

export const SHeader = styled.div`
  background-color: ${primary.backgroundColor};
  color: ${primary.color};
  padding: 15px 15px 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SLink = styled(GLink)`
  color: inherit;
  text-decoration: none;
`;

export const HeaderContainer = styled.div`
  ${deadcentre}
  ${mq({
    padding: ['10px 0 10px 0', '20px 0 20px 0'],
    fontSize: ['28px', '42px']
  })}
`;

export const Star = styled.span`
  ${mq({
    display: ['none', 'inline-block'],
    padding: ['0 15px 0 15px', '0 40px 0 40px']
  })}
`;

export const Link = styled(AniLink)`
  color: inherit;
  text-decoration: none;
  font-size: 24px;
  letter-spacing: 2px;
  opacity: 0.5;
  transition: all 0.4s ease;
  opacity: ${p => p.selected ? '1' : '0.5'};
`;

export const SelectedArrow = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  
  border-bottom: 15px solid white;
`;

export const HeaderLinkContainer = styled.div`
  position: relative;
  padding-bottom: 15px;
  
  &:hover {
    cursor: pointer;
    ${Link} {
      opacity: 1;
    }
  }
`;

export const MobileLinksButton = styled.div`
  width: 50px;
  position: absolute;
  top: 12px;
  left: 20px;
  ${mq({
    display: ['flex', 'none']
  })}
`;

export const LinksContainer = styled.div`
  ${mq({
    display: ['none', 'flex']
  })}
  justify-content: center;
  flex-direction: row;

  >${HeaderLinkContainer} {
    margin-left: 15px;
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
    &:first-child {
      margin-left: 0;
    }
  }
`;

export const HamburgerContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const HamburgerPatty = styled.div`
  width: 35px;
  height: 2px;
  background-color: ${primary.color};
  margin: 10px 0;
`;
