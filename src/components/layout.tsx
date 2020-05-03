/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent, ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Header, { Headings } from './Header';
import '../styles/fonts.css';
import { body } from '../styles/palette';

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
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
