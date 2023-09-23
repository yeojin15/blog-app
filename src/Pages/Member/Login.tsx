import {
  PostButton,
  PostInput,
  PostInputBox,
  PostLabel,
} from 'Pages/Post/Post.style';
import { ErrorBox, LinkTo, MemberTitle } from './Member.style';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { app } from 'FirebaseApp';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('로그인에 성공했어요!');
      navigate('/');
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'email') {
      setEmail(value);
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!value?.match(validRegex)) {
        setError('이메일 형식이 올바르지 않습니다.');
      } else {
        setError('');
      }
    }
    if (name === 'password') {
      setPassword(value);
      if (value?.length < 6) {
        setError('비밀번호는 6자리 이상으로 입력해주세요.');
      } else {
        setError('');
      }
    }
  };

  return (
    <>
      <MemberTitle>로그인</MemberTitle>
      <form onSubmit={onSubmit}>
        <PostInputBox>
          <PostLabel htmlFor='email'>이메일</PostLabel>
          <PostInput
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={onChange}
            required
          />
        </PostInputBox>
        <PostInputBox>
          <PostLabel htmlFor='password'>비밀번호</PostLabel>
          <PostInput
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={onChange}
            required
          />
        </PostInputBox>
        {error && error?.length > 0 && <ErrorBox>{error}</ErrorBox>}
        <PostInputBox>
          계정이 없으신가요? <LinkTo to='/signup'>회원가입</LinkTo>
        </PostInputBox>
        <PostButton disabled={error?.length > 0}>로그인</PostButton>
      </form>
    </>
  );
};

export default Login;
