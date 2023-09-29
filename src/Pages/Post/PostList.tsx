import { useContext, useEffect, useState } from 'react';
import { NoPost, PostTab, PostWrapper } from './Post.style';
import PostItem from './components/PostItem';
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  query,
  orderBy,
  where,
} from 'firebase/firestore';
import { db } from 'FirebaseApp';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthContext from 'Context/AuthContext';

type TabType = 'all' | 'my';
interface PostListProps {
  hasNavigation?: boolean;
  defaultTab?: TabType | CategoryType;
}
export interface CommentsInterface {
  content: string;
  uid: string;
  email: string;
  createdAt: string;
}
export interface PostsProps {
  id?: string;
  title: string;
  email: string;
  subTitle: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  uid?: string;
  category?: CategoryType;
  comments?: CommentsInterface[];
}

export type CategoryType = 'Frontend' | 'Backend' | 'Web' | 'Native';
export const CATEGORIES: CategoryType[] = [
  'Frontend',
  'Backend',
  'Web',
  'Native',
];

const PostList = ({
  hasNavigation = true,
  defaultTab = 'all',
}: PostListProps) => {
  const [activeTab, setActiveTab] = useState<TabType | CategoryType>(
    defaultTab
  );
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    // 초기화
    setPosts([]);

    let postsRef = collection(db, 'posts');
    let postsQuery;

    if (activeTab === 'my' && user) {
      //내 글
      postsQuery = query(
        postsRef,
        where('uid', '==', user.uid),
        orderBy('createdAt', 'desc')
      );
    } else if (activeTab === 'all') {
      //모든 글
      postsQuery = query(postsRef, orderBy('createdAt', 'desc'));
    } else {
      //카테고리에 맞게
      postsQuery = query(
        postsRef,
        where('category', '==', activeTab),
        orderBy('createdAt', 'desc')
      );
    }

    const datas = await getDocs(postsQuery);
    datas?.forEach((doc) => {
      const dataObj = { ...doc.data(), id: doc.id };
      setPosts((prev) => [...prev, dataObj as PostsProps]);
    });
  };
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    const confirm = window.confirm('포스트를 삭제할까요?');
    if (confirm && id) {
      await deleteDoc(doc(db, 'posts', id));
      toast.success('포스트를 삭제했어요');
      navigate('/');
      getPosts();
    } else {
      console.log('fail');
    }
  };

  useEffect(() => {
    getPosts();
  }, [activeTab]);

  return (
    <PostWrapper>
      {hasNavigation && (
        <PostTab>
          <li
            role='presentation'
            className={activeTab === 'all' ? 'active' : ''}
            onClick={() => setActiveTab('all')}>
            전체
          </li>
          <li
            role='presentation'
            className={activeTab === 'my' ? 'active' : ''}
            onClick={() => setActiveTab('my')}>
            나의 글
          </li>
          {CATEGORIES?.map((category) => (
            <li
              key={category}
              role='presentation'
              className={activeTab === category ? 'active' : ''}
              onClick={() => setActiveTab(category)}>
              {category}
            </li>
          ))}
        </PostTab>
      )}
      {posts?.length > 0 ? (
        posts?.map((post, index) => (
          <PostItem
            key={post?.id}
            index={index}
            post={post}
            handleDelete={handleDelete}></PostItem>
        ))
      ) : (
        <NoPost>포스팅이 아직 없어요</NoPost>
      )}
    </PostWrapper>
  );
};

export default PostList;
