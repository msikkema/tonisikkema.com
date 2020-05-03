import { Link as GLink } from 'gatsby';
import styled from 'styled-components';
import { primary } from '../../styles/palette';
import { deadcentre } from '../../styles/positions';

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
  padding: 20px 0 20px 0;
  font-size: 42px;
  ${deadcentre}
`;

export const Star = styled.span`
  padding: 0 40px 0 40px;
`;

export const Link = styled.div`
  font-size: 24px;
  letter-spacing: 2px;
  opacity: 0.5;
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
`;

export const LinksContainer = styled.div`
  display: flex;
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