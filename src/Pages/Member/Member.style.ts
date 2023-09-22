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
  a {
    font-size: 14rem;
    color: var(--bl-2);
    text-decoration: underline;
    transition: 0.4s;
    &:hover,
    &:focus {
      transform: translateY(-3rem);
      color: var(--alert);
    }
  }
`;
