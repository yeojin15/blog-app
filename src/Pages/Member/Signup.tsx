import { useState } from 'react';
import { LinkTo, MemberTitle, ErrorBox } from './Member.style';
import {
  PostButton,
  PostInput,
  PostInputBox,
  PostLabel,
} from 'Pages/Post/Post.style';
import { app } from 'FirebaseApp';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [pwConfirm, setPwConfirm] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);

      toast.success('회원가입에 성공했어요.');
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
      } else if (pwConfirm?.length > 0 && value !== pwConfirm) {
        setError('비밀번호가 일치하지 않아요.');
      } else {
        setError('');
      }
    }

    if (name === 'pwConfirm') {
      setPwConfirm(value);
      if (value?.length < 6) {
        setError('비밀번호는 6자리 이상으로 입력해주세요.');
      } else if (value !== password) {
        setError('비밀번호가 일치하지 않아요.');
      } else {
        setError('');
      }
    }
  };

  return (
    <>
      <MemberTitle>회원가입</MemberTitle>
      <form onSubmit={onSubmit}>
        <PostInputBox>
          <PostLabel htmlFor='email'>이메일</PostLabel>
          <PostInput
            type='email'
            name='email'
            id='email'
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
            onChange={onChange}
            required
          />
        </PostInputBox>
        <PostInputBox>
          <PostLabel htmlFor='pwConfirm'>비밀번호 확인</PostLabel>
          <PostInput
            type='password'
            name='pwConfirm'
            id='pwConfirm'
            onChange={onChange}
            required
          />
        </PostInputBox>
        {error && error?.length > 0 && <ErrorBox>{error}</ErrorBox>}
        <PostInputBox>
          계정이 이미 있으신가요? <LinkTo to='/login'>로그인</LinkTo>
        </PostInputBox>
        <PostButton disabled={error?.length > 0}>회원가입</PostButton>
      </form>
    </>
  );
};

export default Signup;
