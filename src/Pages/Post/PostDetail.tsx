import React, { useEffect, useState } from 'react';
import {
  PostBody,
  PostCategory,
  PostHead,
  PostInfo,
  PostUnit,
} from './Post.style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PostsProps } from './PostList';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from 'FirebaseApp';
import Loader from 'Components/Loader';
import { toast } from 'react-toastify';
import Comment from 'Components/Comment';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostsProps | null>(null);
  const getPost = async (id: string) => {
    if (id) {
      const docRef = doc(db, 'posts', id);
      const docSnap = await getDoc(docRef);
      setPost({ id: docSnap.id, ...(docSnap.data() as PostsProps) });
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm('포스트를 삭제할까요?');
    if (confirm && post && id) {
      await deleteDoc(doc(db, 'posts', id));
      toast.success('포스트를 삭제했어요');
      navigate('/');
    }
  };

  useEffect(() => {
    if (id) {
      getPost(id);
    }
  }, []);

  return (
    <>
      {post ? (
        <>
          <PostHead>
            <h2>{post?.title}</h2>
            <PostInfo>
              <div className='profile-img' />
              <div>{post?.email}</div>
              <div>{post?.createdAt}</div>
            </PostInfo>
            {post?.category && (
              <PostCategory>{post?.category}</PostCategory>
            )}
            <PostUnit $align={'flex-start'}>
              <li>
                <Link to={`/posts/edit/${post?.id}`}>수정</Link>
              </li>
              <li role='presentation' onClick={handleDelete}>
                삭제
              </li>
            </PostUnit>
          </PostHead>
          <PostBody>{post?.content}</PostBody>
          <Comment post={post} getPost={getPost} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PostDetail;
