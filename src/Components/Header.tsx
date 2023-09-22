import { Link } from 'react-router-dom';
import { HeaderBox } from './style';

const Header = () => {
  return (
    <HeaderBox>
      <Link to='/posts'>목록</Link>
      <Link to='/posts/new'>글쓰기</Link>
      <Link to='/profile'>프로필</Link>
    </HeaderBox>
  );
};

export default Header;
