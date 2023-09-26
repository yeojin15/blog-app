import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50rem;
  .profile-img {
    width: 80rem;
    height: 80rem;
    border-radius: 50%;
    background: var(--bl-1);
    overflow: hidden;
  }
  h2 {
    font-size: 24rem;
    margin: 30rem 0 10rem;
  }
  h3 {
    font-size: 18rem;
    font-weight: 500;
  }
  button {
    font-size: 14rem;
    color: var(--bl-2);
    text-decoration: underline;
    transition: 0.4s;
    cursor: pointer;
    &:hover,
    &:focus {
      transform: translateY(-3rem);
      color: var(--alert);
    }
  }
`;
export const MemberTitle = styled.h2`
  text-align: center;
  font-size: 30rem;
  font-weight: 700;
  margin: 80rem 0 50rem;
`;
export const LinkTo = styled(Link)`
  color: var(--primary);
  padding-left: 10rem;
  &:hover {
    color: var(--dark);
  }
`;
export const ErrorBox = styled.div`
  color: var(--alert);
  margin-bottom: 10rem;
`;
