import React from 'react'
import styled from '../../styled'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { Link } from 'gatsby'

const FooterContainer = styled.footer``;

const Footer = () => {
  const { title } = useSiteMetaData();
  return (
    <FooterContainer>
      © {new Date().getFullYear()}, <Link to="/">{title}</Link>
    </FooterContainer>
  );
};

export default Footer;
