import { PostTab, PostWrapper } from './Post.style';
import PostItem from './components/PostItem';

interface PostListProps {
  hasNavigation?: boolean;
}

const PostList = ({ hasNavigation = true }: PostListProps) => {
  return (
    <PostWrapper>
      {hasNavigation && (
        <PostTab>
          <li>전체</li>
          <li>나의 글</li>
        </PostTab>
      )}
      {[...Array(10)].map((item, index) => (
        <PostItem key={index} index={index}></PostItem>
      ))}
    </PostWrapper>
  );
};

export default PostList;
