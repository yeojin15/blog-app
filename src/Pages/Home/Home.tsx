import { HomeImg } from 'Components/style';
import PostList from '../Post/PostList';

const Home = () => {
  const imgSrc =
    'https://images.unsplash.com/photo-1602828889956-45ec6cee6758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80';
  return (
    <>
      <HomeImg>
        <img src={imgSrc} alt='home' />
      </HomeImg>
      <PostList />
    </>
  );
};

export default Home;
