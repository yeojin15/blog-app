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
  a {
    transition: 0.3s;
  }
  a:hover {
    color: var(--primary);
  }
`;
export const Contents = styled.main`
  padding: 30rem;
  min-height: 80vh;
  max-width: 780rem;
  margin: 80rem auto 0;
`;
export const FooterBox = styled(HeaderLinks)`
  position: static;
  z-index: initial;
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
  height: 400rem;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
