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
import { Contents } from './style';

interface RouterProps {
  isAuth: boolean;
}
export default function Router({ isAuth }: RouterProps) {
  return (
    <>
      <Header />
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
