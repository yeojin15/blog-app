import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBox } from './style';

const Footer = () => {
  return (
    <FooterBox>
      <Link to='/posts'>목록</Link>
      <Link to='/posts/new'>글쓰기</Link>
      <Link to='/profile'>프로필</Link>
    </FooterBox>
  );
};

export default Footer;
