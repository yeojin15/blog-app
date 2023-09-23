import {
  PostButton,
  PostInput,
  PostInputBox,
  PostLabel,
  PostTextarea,
} from '../Post.style';

const PostForm = () => {
  return (
    <form action='/posts' method='POST'>
      <PostInputBox>
        <PostLabel>제목</PostLabel>
        <PostInput required />
      </PostInputBox>
      <PostInputBox>
        <PostLabel>소제목</PostLabel>
        <PostInput />
      </PostInputBox>
      <PostInputBox>
        <PostLabel>내용</PostLabel>
        <PostTextarea required />
      </PostInputBox>
      <PostButton>제출</PostButton>
    </form>
  );
};

export default PostForm;
