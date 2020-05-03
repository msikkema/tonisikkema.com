import React, { ReactNode, FunctionComponent } from 'react';
import { Link as GLink } from 'gatsby';
import styled from 'styled-components';
import { panel, primary, secondary } from '../../styles/palette';
import { mq } from '../../styles/positions';

type Props = {
  heading: string;
  headingUrl: string;
  description: string;
  children: ReactNode;
};

type InstitutionProps = {
  title: string;
  url: string;
  description: string;
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
  description
}) => (
  <InstitutionContainer>
    <div className="title">{title}</div>
    <Link href={url} target="_blank">{url}</Link>
    <div className="description">{description}</div>
  </InstitutionContainer>
);

export default ({
  heading,
  description,
  children,
  headingUrl
}: Props): JSX.Element => (
  <PanelContainer>
    <Institution title={heading} url={headingUrl} description={description}/>
    <div>
      {children}
    </div>
  </PanelContainer>
);