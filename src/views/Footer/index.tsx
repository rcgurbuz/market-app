import React from 'react';
import { StyledFooter, FooterLink } from './styled';

const Footer = () => {
  return (
    <StyledFooter>
      <span>© {new Date().getFullYear()} Market</span>
      <span>•</span>
      <FooterLink href='/'>Privacy Policy</FooterLink>
    </StyledFooter>
  );
};

export default Footer;
