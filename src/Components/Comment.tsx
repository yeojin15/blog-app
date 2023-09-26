import React, { useState } from 'react';
import { CommentBox, CommentForm, CommentItem } from './style';

const Comment = () => {
  const [comment, setComment] = useState<string>('');
  const COMMENTS = [
    {
      id: 1,
      email: 'test1@test.com',
      content: '댓글111',
      createdAt: '2023-10-13',
    },
    {
      id: 2,
      email: 'test2@test.com',
      content: '댓글22',
      createdAt: '2023-10-13',
    },
  ];

  const onSubmit = () => {
    console.log('ss');
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
      <CommentForm action=''>
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
        {COMMENTS?.map((comment) => (
          <CommentItem key={comment.id}>
            <div className='info'>
              <p>{comment.email}</p>
              <span>{comment.createdAt}</span>
              <button>삭제</button>
            </div>
            <div>{comment.content}</div>
          </CommentItem>
        ))}
      </div>
    </CommentBox>
  );
};

export default Comment;
