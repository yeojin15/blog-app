import React from 'react';
import { PostBox, PostInfo, PostThumb, PostUnit } from '../Post.style';
import { Link } from 'react-router-dom';

const PostItem = ({ index }: { index: number }) => {
  return (
    <PostBox key={index}>
      <PostInfo>
        <div className='profile-img' />
        <div>글쓴이</div>
        <div>2023.10.13</div>
      </PostInfo>
      <PostThumb>
        <Link to={`/posts/${index}`}>
          <h2>타이틀{index}</h2>
          <article>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </article>
        </Link>
      </PostThumb>
      <PostUnit>
        <li>수정</li>
        <li>삭제</li>
      </PostUnit>
    </PostBox>
  );
};

export default PostItem;
