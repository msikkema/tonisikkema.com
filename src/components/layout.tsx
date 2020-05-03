/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent, ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import '../styles/fonts.css';
import { body } from '../styles/palette';
import { Headings } from './Header/Header.types';

type Props = {
  children: ReactNode;
  heading: Headings;
};

const Global = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    background-color: ${body.backgroundColor};
    color: ${body.color};
    font-size: 16px;
  }
`;

const Layout: FunctionComponent<Props> = ({ children, heading }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global />
      <Header selected={heading} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: '1200px',
          padding: '25px 1.0875rem 1.45rem',
        }}
      >
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    </>
  );
};

export default Layout;
