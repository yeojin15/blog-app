import { useContext, useEffect, useState } from 'react';
import {
  PostButton,
  PostInput,
  PostInputBox,
  PostLabel,
  PostSelect,
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
import { CATEGORIES, CategoryType, PostsProps } from '../PostList';

const PostForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>('');
  const [subTitle, setSubTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<CategoryType>('Frontend');

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
      setCategory(post?.category as CategoryType);
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
          updatedAt: new Date()?.toLocaleDateString('ko', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }),
          category,
        });
        toast?.success('포스팅이 수정되었어요');
        navigate(`/posts/${id}`);
      } else {
        //post 없으면 데이터 생성
        await addDoc(collection(db, 'posts'), {
          title,
          subTitle,
          content,
          createdAt: new Date()?.toLocaleDateString('ko', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }),
          email: user?.email,
          uid: user?.uid,
          category,
        });
        toast?.success('포스팅이 완료되었어요');
        navigate('/');
      }
    } catch (error: any) {
      toast?.error(error?.code);
    }
  };

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    if (name === 'category') {
      setCategory(value as CategoryType);
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
        <PostLabel htmlFor='category'>카테고리</PostLabel>
        <PostSelect
          name='category'
          id='category'
          onChange={onChange}
          defaultValue={category}>
          <option value=''>카테고리를 선택하세요</option>
          {CATEGORIES?.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </PostSelect>
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
