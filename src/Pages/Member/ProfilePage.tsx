import React from 'react';
import { ProfileWrapper } from './Member.style';
import { Link } from 'react-router-dom';
import PostList from '../Post/PostList';

const ProfilePage = () => {
  return (
    <>
      <ProfileWrapper>
        <div>
          <div className='profile-img' />
          <h2>test@test.com</h2>
          <h3>김여진</h3>
        </div>
        <Link to='/'>로그아웃</Link>
      </ProfileWrapper>
      <PostList hasNavigation={false} />
    </>
  );
};

export default ProfilePage;
