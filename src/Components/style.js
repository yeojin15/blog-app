import styled from 'styled-components';

export const HeaderBox = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30rem;
  border-bottom: 1px solid silver;
  gap: 15rem;
  color: gray;
  a:hover {
    color: black;
  }
`;
export const FooterBox = styled(HeaderBox)`
  justify-content: center;
  gap: 30px;
  padding: 80rem 30rem;
  border: none;
  background: #eee;
`;
