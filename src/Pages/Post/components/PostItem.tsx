import { useContext } from 'react';
import { PostBox, PostInfo, PostThumb, PostUnit } from '../Post.style';
import { Link } from 'react-router-dom';
import AuthContext from 'Context/AuthContext';

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
