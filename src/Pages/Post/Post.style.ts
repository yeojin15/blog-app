import styled from 'styled-components';

export const PostWrapper = styled.div`
  width: 100%;
`;
export const PostTab = styled.ul`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15rem;
  padding: 45rem 0;
  li {
    position: relative;
    font-size: 16rem;
    font-weight: 500;
    padding-bottom: 3rem;
    cursor: pointer;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      background: var(--primary);
      opacity: 0;
      transition: 0.3s;
    }
    &:hover {
      color: var(--primary);
    }
    &:hover:after {
      opacity: 1;
    }
  }
`;
export const PostBox = styled.article`
  width: 100%;
  margin: 0 auto;
  padding: 30rem 10rem;
  transition: 0.4s;
  border-bottom: 1px solid var(--bl-1);
  &:last-of-type {
    border-bottom: none;
  }
`;
export const PostInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15rem;
  color: var(--bl-3);
  font-size: 14rem;
  margin-bottom: 15rem;
  .profile-img {
    display: block;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    overflow: hidden;
    background: var(--bl-1);
  }
`;
export const PostThumb = styled.div`
  a {
    display: block;
  }
  h2 {
    font-size: 18rem;
    font-weight: 600;
    margin-bottom: 10rem;
  }
  div {
    font-size: 14rem;
    line-height: 172%;
  }
`;

type PostUnitProps = {
  align?: string;
};
export const PostUnit = styled.ul<PostUnitProps>`
  display: flex;
  justify-content: ${(props) => props.align || 'flex-end'};
  align-items: center;
  gap: 10rem;
  margin-top: 20rem;
  li {
    font-size: 12rem;
    cursor: pointer;
    color: var(--bl-2);
    transition: 0.4s;
    &:hover {
      color: var(--bl-5);
    }
  }
`;
export const PostHead = styled.div`
  padding-bottom: 20rem;
  border-bottom: 1px solid var(--bl-1);
  h2 {
    font-size: 30rem;
    font-weight: 700;
    line-height: 172%;
    margin: 30rem 0;
  }
`;
export const PostBody = styled.div`
  padding: 30rem 0;
  font-size: 16rem;
  line-height: 172%;
  color: var(--bl-3);
`;
