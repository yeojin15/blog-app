import { ProfileWrapper } from './Member.style';
import PostList from '../Post/PostList';
import { getAuth, signOut } from 'firebase/auth';
import { app } from 'FirebaseApp';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const auth = getAuth(app);
  const onSignOut = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      toast.success('로그아웃 되었어요');
    } catch (error: any) {
      toast.error(error.code);
    }
  };
  return (
    <>
      <ProfileWrapper>
        <div>
          <div className='profile-img' />
          <h2>{auth?.currentUser?.email}</h2>
          <h3>{auth?.currentUser?.displayName || '사용자'}</h3>
        </div>
        <button onClick={onSignOut}>로그아웃</button>
      </ProfileWrapper>
      <PostList hasNavigation={false} />
    </>
  );
};

export default ProfilePage;
