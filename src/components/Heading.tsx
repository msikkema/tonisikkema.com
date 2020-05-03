import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { mq } from '../styles/positions';

type Props = {
  children: ReactNode;
  color?: string;
};

const Heading = styled.div`
  ${mq({
    fontSize: ['20px', '24px']
  })}
  letter-spacing: 2px;
  color: ${p => p.color || 'inherit'};
`;

export default ({ children, color }: Props): JSX.Element => (
  <Heading color={color}>
    {children}
  </Heading>
);