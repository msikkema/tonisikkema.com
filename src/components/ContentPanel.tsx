import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const Container = styled.div`
  padding: 15px;
  line-height: 2;
  font-size: 18px;
`;

export default ({ children }: Props): JSX.Element => (
  <Container>
    {children}
  </Container>
);