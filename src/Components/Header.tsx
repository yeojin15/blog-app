import { Link } from 'react-router-dom';
import { HeaderBox, HeaderLinks, HeaderLogo } from './style';
import { BsSun, BsMoonFill } from 'react-icons/bs';
import { useContext } from 'react';
import ThemeContext from 'Context/ThemeContext';

const Header = () => {
  const context = useContext(ThemeContext);
  return (
    <HeaderBox>
      <HeaderLogo>
        <Link to='/'>React-Blog</Link>
      </HeaderLogo>
      <HeaderLinks>
        <Link to='/posts'>목록</Link>
        <Link to='/posts/new'>글쓰기</Link>
        <Link to='/profile'>프로필</Link>
        <div>
          {context?.theme === 'light' ? (
            <BsSun onClick={context.toggleMode} />
          ) : (
            <BsMoonFill onClick={context.toggleMode} />
          )}
        </div>
      </HeaderLinks>
    </HeaderBox>
  );
};

export default Header;
