import React, { useContext } from 'react';
import { PostBox, PostInfo, PostThumb, PostUnit } from '../Post.style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthContext from 'Context/AuthContext';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from 'FirebaseApp';
import { toast } from 'react-toastify';

const PostItem = ({
  index,
  post,
  handleDelete,
}: {
  index: number;
  post: any;
  handleDelete: any;
}) => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  return (
    <PostBox key={index}>
      <PostInfo>
        <div className='profile-img' />
        <div>{post?.email}</div>
        <div>{post?.createdAt}</div>
      </PostInfo>
      <PostThumb>
        <Link to={`/posts/${post?.id}`}>
          <h2>{post?.title}</h2>
          <article>{post?.subTitle}</article>
        </Link>
      </PostThumb>
      {post?.email === user?.email && (
        <PostUnit>
          <li>
            <Link to={`/posts/edit/${post?.id}`}>수정</Link>
          </li>
          <li
            role='presentation'
            onClick={() => handleDelete(post.id as string)}>
            삭제
          </li>
        </PostUnit>
      )}
    </PostBox>
  );
};

export default PostItem;
