import { useEffect, useState } from 'react';
import { NoPost, PostTab, PostWrapper } from './Post.style';
import PostItem from './components/PostItem';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from 'FirebaseApp';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

interface PostListProps {
  hasNavigation?: boolean;
}
export interface PostsProps {
  id?: string;
  title: string;
  email: string;
  subTitle: string;
  content: string;
  createAt: string;
  updatedAt?: string;
  uid?: string;
}
type TabType = 'all' | 'my';

const PostList = ({ hasNavigation = true }: PostListProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [posts, setPosts] = useState<PostsProps[]>([]);

  const getPosts = async () => {
    const datas = await getDocs(collection(db, 'posts'));
    // 초기화
    setPosts([]);
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
  }, []);

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
