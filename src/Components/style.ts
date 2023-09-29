import styled from 'styled-components';

export const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80rem;
  background: #fff;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
export const HeaderLogo = styled.h1`
  font-size: 24rem;
  font-weight: 700;
  color: var(--bl-4);
`;
export const HeaderLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15rem;
  color: var(--bl-2);
  font-size: 14rem;
  font-weight: 500;
  cursor: pointer;
  a {
    transition: 0.3s;
  }
  a:hover {
    color: var(--primary);
  }
  div {
    display: flex;
    align-items: center;
    font-weight: 700;
    color: inherit;
    transition: 0.3s;
    font-size: 20rem;
    &:hover {
      color: var(--primary);
    }
  }
`;
export const Contents = styled.main`
  padding: 30rem;
  min-height: 80vh;
  max-width: 780rem;
  margin: 80rem auto 0;
`;
export const FooterBox = styled.footer`
  position: static;
  z-index: initial;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 50rem 30rem;
  border: none;
  background: var(--bl-1);
`;
export const Loading = styled.div`
  width: 80rem;
  height: 80rem;
  border-radius: 50%;
  border: 10px solid var(--primary);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
export const HomeImg = styled.div`
  width: 100%;
  height: 450rem;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const CommentBox = styled.div`
  width: 100%;
  margin-top: 50rem;
`;
export const CommentForm = styled.form`
  margin-bottom: 50rem;
  label {
    font-size: 18rem;
    font-weight: 600;
    display: block;
  }
  textarea {
    width: 100%;
    height: 100rem;
    border-radius: 8rem;
    border: 1px solid var(--bl-1);
    resize: none;
    margin: 15rem 0 5rem;
    padding: 10rem;
    font-size: 14rem;
    line-height: 172%;
  }
  button {
    display: block;
    margin-left: auto;
    width: 100rem;
    height: 40rem;
    background: var(--primary);
    border-radius: 4rem;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: var(--dark);
    }
  }
`;
export const CommentItem = styled.div`
  border-bottom: 1px solid var(--bl-1);
  padding: 20rem 0;
  &:last-of-type {
    border: none;
  }
  .info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10rem;
    font-size: 14rem;
    margin-bottom: 15rem;
    span {
      color: var(--bl-2);
    }
  }
`;
