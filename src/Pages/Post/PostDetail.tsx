import React from 'react';
import { PostBody, PostHead, PostInfo, PostUnit } from './Post.style';
import { Link } from 'react-router-dom';

const PostDetail = () => {
  return (
    <>
      <PostHead>
        <h2>타이틀틅르ㅡㄹ틑르</h2>
        <PostInfo>
          <div className='profile-img' />
          <div>글쓴이</div>
          <div>2023.10.13</div>
        </PostInfo>
        <PostUnit align={'flex-start'}>
          <li>
            <Link to={`/posts/edit/1`}>수정</Link>
          </li>
          <li>삭제</li>
        </PostUnit>
      </PostHead>
      <PostBody>
        It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The
        point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop
        publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy. Various versions
        have evolved over the years, sometimes by accident, sometimes on
        purpose (injected humour and the like).
      </PostBody>
    </>
  );
};

export default PostDetail;
