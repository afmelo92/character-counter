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
    color: #00ACEE;
    margin-bottom: 10px;
  }

  textarea {
    width: 300px;
    height: 200px;
    border: 1px solid #00ACEE;
    border-radius: 5px;
    margin-bottom: 20px;
    background: #14171A;
    color: #fff;
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
  }
`;
