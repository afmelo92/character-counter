import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;

  h1 {
    margin-bottom: 10px;
  }

  textarea {
    width: 300px;
    height: 200px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
`;
