import React, { useContext, useState } from 'react';
import { CommentBox, CommentForm, CommentItem } from './style';
import { PostsProps } from 'Pages/Post/PostList';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from 'FirebaseApp';
import AuthContext from 'Context/AuthContext';
import { toast } from 'react-toastify';

interface CommentsProps {
  post: PostsProps;
  getPost: (id: string) => Promise<void>;
}

const Comment = ({ post, getPost }: CommentsProps) => {
  const [comment, setComment] = useState<string>('');
  const { user } = useContext(AuthContext);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (post && post?.id) {
        const postRef = doc(db, 'posts', post.id);
        if (user?.uid) {
          const commentObj = {
            content: comment,
            uid: user.uid,
            email: user.email,
            createdAt: new Date()?.toLocaleDateString('ko', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            }),
          };

          await updateDoc(postRef, {
            comments: arrayUnion(commentObj),
            updatedAt: new Date()?.toLocaleDateString('ko', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            }),
          });

          await getPost(post.id);
        }
      }
      toast.success('댓글이 작성되었어요');
      setComment('');
    } catch (error: any) {
      toast.error(error);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'comment') {
      setComment(value);
    }
  };

  return (
    <CommentBox>
      <CommentForm onSubmit={onSubmit}>
        <label htmlFor='comment'>댓글 쓰기</label>
        <textarea
          name='comment'
          id='comment'
          required
          value={comment}
          onChange={onChange}
          placeholder='댓글을 입력해주세요'
        />
        <button>입력</button>
      </CommentForm>
      <div>
        {post?.comments
          ?.slice(0)
          .reverse()
          .map((comment) => (
            <CommentItem key={comment.createdAt}>
              <div className='info'>
                <p>{comment.email}</p>
                <span>{comment.createdAt}</span>
                <span role='presentation'>삭제</span>
              </div>
              <div>{comment.content}</div>
            </CommentItem>
          ))}
      </div>
    </CommentBox>
  );
};

export default Comment;
