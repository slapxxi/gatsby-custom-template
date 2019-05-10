import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import React, { ComponentProps, Fragment } from 'react';
import Header from './header';
import './layout.css';

interface Props extends ComponentProps<'main'> {}

function Layout(props: Props) {
  let { children } = props;
  let { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <Header siteTitle={site.siteMetadata.title} />
      <div
        css={css`
          margin: 0 auto;
          max-width: 960px;
          padding: 0 1.0875rem 1.45rem;
        `}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </Fragment>
  );
}

export default Layout;
