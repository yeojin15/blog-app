import { Link } from 'react-router-dom';
import { HeaderBox, HeaderLinks, HeaderLogo } from './style';

const Header = () => {
  return (
    <HeaderBox>
      <HeaderLogo>
        <Link to='/'>React-Blog</Link>
      </HeaderLogo>
      <HeaderLinks>
        <Link to='/posts'>목록</Link>
        <Link to='/posts/new'>글쓰기</Link>
        <Link to='/profile'>프로필</Link>
      </HeaderLinks>
    </HeaderBox>
  );
};

export default Header;
