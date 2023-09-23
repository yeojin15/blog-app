import { useState } from 'react';
import { PostTab, PostWrapper } from './Post.style';
import PostItem from './components/PostItem';

interface PostListProps {
  hasNavigation?: boolean;
}
type TabType = 'all' | 'my';

const PostList = ({ hasNavigation = true }: PostListProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

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
      {[...Array(10)].map((item, index) => (
        <PostItem key={index} index={index}></PostItem>
      ))}
    </PostWrapper>
  );
};

export default PostList;
