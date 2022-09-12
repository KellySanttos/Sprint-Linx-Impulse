import React from 'react';
import S from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={S.footer}>
      <p className={S.p}>
        Testando suas habilidades em React.
        <span className={S.span}> Linx Impulse 2019</span>
      </p>
    </footer>
  );
};

export default Footer;