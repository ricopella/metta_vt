import Header from './header'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './layout.css'

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()},{' '}
          <a href="https://www.mettavt.com">Metta Healing Arts and Wellness</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
