import { useContext, useEffect, useState } from 'react';
import {
  PostButton,
  PostInput,
  PostInputBox,
  PostLabel,
  PostTextarea,
} from '../Post.style';
import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from 'FirebaseApp';
import AuthContext from 'Context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PostsProps } from '../PostList';

const PostForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>('');
  const [subTitle, setSubTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [post, setPost] = useState<PostsProps | null>(null);

  const getPost = async (id: string) => {
    if (id) {
      const docRef = doc(db, 'posts', id);
      const docSnap = await getDoc(docRef);
      setPost({ id: docSnap.id, ...(docSnap.data() as PostsProps) });
    }
  };

  useEffect(() => {
    if (id) {
      getPost(id);
    }
  }, []);
  useEffect(() => {
    if (post) {
      setTitle(post?.title);
      setSubTitle(post?.subTitle);
      setContent(post?.content);
    }
  }, [post]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (post && id) {
        //post 있으면 데이터 수정
        const postRef = doc(db, 'posts', id);
        await updateDoc(postRef, {
          title,
          subTitle,
          content,
          updatedAt: new Date()?.toLocaleDateString(),
        });
        toast?.success('포스팅이 수정되었어요');
        navigate(`/posts/${id}`);
      } else {
        //post 없으면 데이터 생성
        await addDoc(collection(db, 'posts'), {
          title,
          subTitle,
          content,
          createAt: new Date()?.toLocaleDateString(),
          email: user?.email,
          uid: user?.uid,
        });
        toast?.success('포스팅이 완료되었어요');
        navigate('/');
      }
    } catch (error: any) {
      toast?.error(error?.code);
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'title') {
      setTitle(value);
    }
    if (name === 'subTitle') {
      setSubTitle(value);
    }
    if (name === 'content') {
      setContent(value);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <PostInputBox>
        <PostLabel htmlFor='title'>제목</PostLabel>
        <PostInput
          name='title'
          id='title'
          value={title}
          onChange={onChange}
          required
        />
      </PostInputBox>
      <PostInputBox>
        <PostLabel htmlFor='subTitle'>소제목</PostLabel>
        <PostInput
          name='subTitle'
          id='subTitle'
          value={subTitle}
          onChange={onChange}
          required
        />
      </PostInputBox>
      <PostInputBox>
        <PostLabel htmlFor='content'>내용</PostLabel>
        <PostTextarea
          name='content'
          id='content'
          value={content}
          onChange={onChange}
          required
        />
      </PostInputBox>
      <PostButton>{post ? '수정' : '제출'}</PostButton>
    </form>
  );
};

export default PostForm;
