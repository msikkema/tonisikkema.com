import React, { ReactNode, FunctionComponent } from 'react';
import { Link as GLink } from 'gatsby';
import styled from 'styled-components';
import { panel, primary, secondary } from '../../styles/palette';
import { mq } from '../../styles/positions';

type Props = {
  institution: string;
  institutionUrl: string;
  years: string;
  children: ReactNode;
};

type InstitutionProps = {
  title: string;
  url: string;
  years: string;
};

const PanelContainer = styled.div`
  color: ${panel.color};
  background-color: ${panel.backgroundColor};
  ${mq({
    padding: ['15px', '25px']
  })}
`;

const InstitutionContainer = styled.div`
  ${mq({
    padding: ['15px', '25px']
  })}

  .title {
    color: ${secondary.color};
    ${mq({
      fontSize: ['24px', '32px']
    })}
  }

  .description {
    color: ${secondary.color}
  }
`;

const Link = styled.a`
  color: ${primary.backgroundColor};
`;

const Institution: FunctionComponent<InstitutionProps> = ({
  title,
  url,
  years
}) => (
  <InstitutionContainer>
    <div className="title">{title}</div>
    <Link href={url} target="_blank">{url}</Link>
    <div className="description">{years}</div>
  </InstitutionContainer>
);

export default ({
  institution,
  institutionUrl,
  years,
  children
}: Props): JSX.Element => (
  <PanelContainer>
    <Institution
      title={institution}
      url={institutionUrl}
      years={years}
    />
    <div>
      {children}
    </div>
  </PanelContainer>
);