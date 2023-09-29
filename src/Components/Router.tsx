import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'Pages/Home/Home';
import PostList from 'Pages/Post/PostList';
import PostDetail from 'Pages/Post/PostDetail';
import PostNew from 'Pages/Post/PostNew';
import PostEdit from 'Pages/Post/PostEdit';
import ProfilePage from 'Pages/Member/ProfilePage';
import Login from 'Pages/Member/Login';
import Signup from 'Pages/Member/Signup';
import Header from './Header';
import Footer from './Footer';
import { Contents, HomeImg } from './style';
import ScrollToTop from './ScrollToTop';

interface RouterProps {
  isAuth: boolean;
}
export default function Router({ isAuth }: RouterProps) {
  const imgSrc =
    'https://images.unsplash.com/photo-1602828889956-45ec6cee6758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80';

  return (
    <>
      <ScrollToTop />
      <Header />
      {isAuth ? (
        <HomeImg>
          <img src={imgSrc} alt='home' />
        </HomeImg>
      ) : null}

      <Contents>
        <Routes>
          {isAuth ? (
            <>
              <Route path='/' element={<Home />} />
              <Route path='/posts' element={<PostList />} />
              <Route path='/posts/:id' element={<PostDetail />} />
              <Route path='/posts/new' element={<PostNew />} />
              <Route path='/posts/edit/:id' element={<PostEdit />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='*' element={<Navigate replace to='/' />} />
            </>
          ) : (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='*' element={<Login />} />
            </>
          )}
        </Routes>
      </Contents>
      <Footer />
    </>
  );
}
